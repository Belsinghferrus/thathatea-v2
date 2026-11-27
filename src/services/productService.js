import bunFallback from "../assets/images/home/bun.png";
import cakeFallback from "../assets/images/home/menu-cake.png";
import biscuitFallback from "../assets/images/home/biscuit.png";
import snacksFallback from "../assets/images/home/menu-snacks.png";
import teaFallback from "../assets/images/home/menu-tea.png";
import heroFallback from "../assets/images/menu/menu-hero.png";

export const API_PRODUCTS_URL =
  "https://note-api.thathatea.com/api/app/product/list";
export const API_CATEGORIES_URL =
  "https://note-api.thathatea.com/api/app/category/list";

const RAW_IMAGE_BASE =
  import.meta.env.VITE_PRODUCT_IMAGE_BASE_URL ||
  "https://note-api.thathatea.com/images/menu/";

export const PRODUCT_IMAGE_BASE_URL = RAW_IMAGE_BASE.endsWith("/")
  ? RAW_IMAGE_BASE
  : `${RAW_IMAGE_BASE}/`;

const BAKERY_CATEGORY_ORDER = ["Cookies", "Muffin", "Bun", "Cakes", "Others"];
const EXCLUDED_CATEGORY_KEYWORDS = ["raw material", "tea & coffee"];

let cachedMenuPromise = null;
let cachedMenuData = null;

function extractList(json) {
  if (Array.isArray(json)) return json;
  if (Array.isArray(json?.data)) return json.data;
  return [];
}

export function isBakeryCategory(categoryName) {
  const normalized = String(categoryName || "").trim().toLowerCase();
  if (!normalized) return false;
  return !EXCLUDED_CATEGORY_KEYWORDS.some((kw) => normalized.includes(kw));
}

export function getProductCategoryId(product) {
  return product?.categorylink ?? product?.category_id ?? product?.categoryId;
}

export function getEffectivePrice(product) {
  const selling = parseFloat(product?.selling_price);
  const base = parseFloat(product?.price);
  if (Number.isFinite(selling) && selling > 0) return selling;
  if (Number.isFinite(base) && base > 0) return base;
  return 0;
}

export function getOriginalPrice(product) {
  const base = parseFloat(product?.price);
  return Number.isFinite(base) && base > 0 ? base : 0;
}

export function productHasDiscount(product) {
  const selling = parseFloat(product?.selling_price);
  const base = parseFloat(product?.price);
  return (
    Number.isFinite(selling) &&
    Number.isFinite(base) &&
    selling > 0 &&
    base > 0 &&
    selling < base
  );
}

export function isProductAvailable(product) {
  if (!product) return false;
  if (product.status === false) return false;
  if (product.inStock === false) return false;
  if (String(product.availability || "").toUpperCase() === "OUTOFSTOCK") {
    return false;
  }
  return true;
}

export function formatPrice(price) {
  const num = Number(price);
  if (!Number.isFinite(num)) return "—";
  return num % 1 === 0 ? `₹${num}` : `₹${num.toFixed(2)}`;
}

export function getProductImageUrl(product) {
  const images = Array.isArray(product?.image_names)
    ? product.image_names.filter(Boolean)
    : [];
  if (images.length === 0) return null;
  const mainImage = images.find((name) =>
    String(name).toLowerCase().includes("product-main")
  );
  const selected = mainImage || images[0];
  if (/^https?:\/\//i.test(selected)) return selected;
  return `${PRODUCT_IMAGE_BASE_URL}${selected.replace(/^\/+/, "")}`;
}

export function getFallbackProductImage(categoryName) {
  const lower = String(categoryName || "").toLowerCase();
  if (lower.includes("cake") || lower.includes("muffin")) return cakeFallback;
  if (lower.includes("bun")) return bunFallback;
  if (lower.includes("cookie")) return biscuitFallback;
  if (lower.includes("tea") || lower.includes("coffee")) return teaFallback;
  if (lower.includes("other") || lower.includes("snack")) return snacksFallback;
  return heroFallback;
}

export function hasPopularityData(products) {
  return (
    Array.isArray(products) &&
    products.some(
      (p) =>
        typeof p?.is_popular === "boolean" ||
        typeof p?.is_bestseller === "boolean" ||
        typeof p?.popularity === "number"
    )
  );
}

export function sortBakeryCategories(categories) {
  return [...categories].sort((a, b) => {
    const idxA = BAKERY_CATEGORY_ORDER.findIndex(
      (name) => name.toLowerCase() === String(a.name || "").trim().toLowerCase()
    );
    const idxB = BAKERY_CATEGORY_ORDER.findIndex(
      (name) => name.toLowerCase() === String(b.name || "").trim().toLowerCase()
    );
    const orderA = idxA === -1 ? 999 : idxA;
    const orderB = idxB === -1 ? 999 : idxB;
    return orderA - orderB || String(a.name).localeCompare(String(b.name));
  });
}

export async function fetchBakeryMenu({ forceRefresh = false } = {}) {
  if (cachedMenuData && !forceRefresh) {
    return cachedMenuData;
  }
  if (cachedMenuPromise && !forceRefresh) {
    return cachedMenuPromise;
  }

  cachedMenuPromise = (async () => {
    const [prodRes, catRes] = await Promise.all([
      fetch(API_PRODUCTS_URL),
      fetch(API_CATEGORIES_URL),
    ]);

    if (!prodRes.ok) {
      throw new Error(`Failed to fetch products (${prodRes.status})`);
    }
    if (!catRes.ok) {
      throw new Error(`Failed to fetch categories (${catRes.status})`);
    }

    const [prodJson, catJson] = await Promise.all([
      prodRes.json(),
      catRes.json(),
    ]);

    const rawCategories = extractList(catJson).filter(
      (c) => c?.status !== false && isBakeryCategory(c?.name)
    );
    const categories = sortBakeryCategories(rawCategories);
    const bakeryCategoryIds = new Set(categories.map((c) => String(c.id)));

    const rawProducts = extractList(prodJson);
    const products = rawProducts.filter((p) => {
      if (!p || p.status === false) return false;
      const catId = String(getProductCategoryId(p) ?? "");
      if (bakeryCategoryIds.size > 0 && bakeryCategoryIds.has(catId)) {
        return true;
      }
      return isBakeryCategory(p.category_name);
    });

    cachedMenuData = { products, categories };
    return cachedMenuData;
  })();

  try {
    return await cachedMenuPromise;
  } catch (err) {
    cachedMenuPromise = null;
    throw err;
  }
}
