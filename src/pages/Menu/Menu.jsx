import { useCallback, useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MenuHero from "../../sections/Menu/MenuHero.jsx";
import MenuTicker from "../../sections/Menu/MenuTicker.jsx";
import BestSellingSection from "../../sections/Menu/BestSellingSection.jsx";
import MenuSection from "../../sections/Menu/MenuSection.jsx";
import CombosSection from "../../sections/Menu/CombosSection.jsx";
import ProductQuickViewModal from "../../sections/Menu/ProductQuickViewModal.jsx";
import { fetchBakeryMenu } from "../../services/productService";

function Menu() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const modalTriggerRef = useRef(null);

  const handleRetry = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchBakeryMenu({ forceRefresh: true });
      setProducts(data.products);
      setCategories(data.categories);
    } catch (err) {
      setError(err?.message || "Something went wrong while fetching the menu.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    fetchBakeryMenu({ forceRefresh: false })
      .then((data) => {
        if (cancelled) return;
        setProducts(data.products);
        setCategories(data.categories);
        setLoading(false);
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err?.message || "Something went wrong while fetching the menu.");
        setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const handleQuickView = useCallback((product, triggerEl) => {
    modalTriggerRef.current = triggerEl || null;
    setSelectedProduct(product);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  return (
    <>
      <Navbar />
      <main className="w-full overflow-x-clip">
        <MenuHero />
        <MenuTicker />
        <BestSellingSection
          products={products}
          loading={loading}
          onQuickView={handleQuickView}
        />
        <MenuSection
          products={products}
          categories={categories}
          loading={loading}
          error={error}
          onRetry={handleRetry}
          onQuickView={handleQuickView}
        />
        <CombosSection products={products} />
      </main>
      <Footer />

      <ProductQuickViewModal
        key={selectedProduct?.id ?? "closed"}
        product={selectedProduct}
        triggerRef={modalTriggerRef}
        onClose={handleCloseModal}
      />
    </>
  );
}

export default Menu;
