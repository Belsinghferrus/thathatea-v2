import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Coffee, CakeSlice, Croissant, Cookie } from "lucide-react";

import ourMenuScript from "../../assets/images/home/menu-h1.png";
import mascotDough from "../../assets/images/home/mascot3.png";
import decoCupcake from "../../assets/images/home/cake2.png";
import decoDonut from "../../assets/images/home/donut.png";
import decoWheat from "../../assets/images/home/grain.png";
import decoRollingPin from "../../assets/images/home/bread-wood.png";

// Product Images
import imgTea from "../../assets/images/home/menu-tea.png";
import imgCake from "../../assets/images/home/menu-cake.png";
import imgBun from "../../assets/images/home/menu-bun.png";
import imgSnacks from "../../assets/images/home/menu-snacks.png";

const menuItems = [
    {
        title: "Signature Tea",
        desc: "Classic, Masala, Ginger and more",
        img: imgTea,
        icon: Coffee,
    },
    {
        title: "Cakes & Desserts",
        desc: "A warm and soft eggless...",
        img: imgCake,
        icon: CakeSlice,
    },
    {
        title: "Bun & Cakes",
        desc: "A warm and soft eggless...",
        img: imgBun,
        icon: Croissant,
    },
    {
        title: "Hot Snacks",
        desc: "A warm and soft eggless...",
        img: imgSnacks,
        icon: Cookie,
    },
];

function Menu() {
    const navigate = useNavigate();

    return (
        <section className="relative flex min-h-[120vh] w-full flex-col justify-center overflow-hidden bg-[#F7EAD2] py-16 lg:py-0">

            {/* =========================================
          DECORATIVE BACKGROUND IMAGES
      ========================================= */}
            <div className="pointer-events-none absolute inset-0 z-0">
                {/* Top Right Wheat */}
                <img
                    src={decoWheat}
                    alt=""
                    className="absolute -right-10 top-0 w-38 opacity-80 lg:right-0 lg:top-0 lg:w-52 xl:w-60"
                />
                {/* Left Cupcake */}
                <img
                    src={decoCupcake}
                    alt=""
                    className="absolute left-0 top-1/4 w-32 opacity-90 lg:left-10 lg:top-1/3 lg:w-48 xl:w-56"
                />
                {/* Bottom Left Rolling Pin */}
                <img
                    src={decoRollingPin}
                    alt=""
                    className="absolute -bottom-4 -left-4 w-40 opacity-90 lg:bottom-10 lg:left-0 lg:w-64"
                />
                {/* Donut near heading */}
                <img
                    src={decoDonut}
                    alt=""
                    className="absolute left-[45%] top-[28%] hidden w-16 opacity-100 lg:block lg:w-24 xl:w-28"
                />
            </div>

            {/* =========================================
          MAIN CONTENT CONTAINER
      ========================================= */}
            <div className="relative z-10 mx-auto flex w-full max-w-325 flex-col px-6 lg:px-16">

                {/* TOP SECTION: Text & Mascot */}
                <div className="relative grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-8">

                    {/* LEFT COLUMN: Text & Button */}
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

                        {/* "Our Menu" Script Image */}
                        <img
                            src={ourMenuScript}
                            alt="Our Menu"
                            className="mb-2 h-16 object-contain lg:h-16 xl:h-18"
                        />

                        {/* Main Heading */}
                        <h2 className="mt-2 font-thunder text-3xl font-bold uppercase leading-none tracking-[-0.02em] text-deep-coffee sm:text-5xl lg:text-4xl xl:text-[4rem]">
                            Simple Flavours.<br />Everyday Favourites.
                        </h2>

                        {/* Subtext */}
                        <p className="mt-6 max-w-105 font-mona text-sm leading-relaxed text-deep-coffee/80 sm:text-base lg:text-lg">
                            From classic chai to freshly baked delights, our menu is crafted for every mood, craving and moment.
                        </p>

                        {/* Action Area */}
                        <div className="mt-8 flex flex-col items-center gap-8 sm:flex-row lg:mt-10">
                            <button
                                onClick={() => navigate("/menu")}
                                className="group flex items-center justify-center gap-3 rounded-xl bg-caramel px-8 py-4 font-mona text-sm font-semibold uppercase tracking-widest text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-deep-coffee"
                            >
                                Explore Menu
                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </button>

                            {/* Quote */}
                            <span className="font-allura text-3xl text-caramel sm:text-4xl lg:ml-4 lg:text-[2.5rem]">
                                “From the first sip<br />to the last bite”
                            </span>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Mascot */}
                    <div className="relative flex h-full items-end justify-center lg:justify-end">
                        <img
                            src={mascotDough}
                            alt="Thatha tossing dough"
                            className="w-full max-w-87.5 object-contain object-bottom sm:max-w-112.5 lg:max-w-125 xl:max-w-150"
                        />
                    </div>
                </div>

                {/* BOTTOM SECTION: 4 Product Cards */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3">
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className="group flex flex-col overflow-hidden rounded-2xl bg-white p-3 shadow-xl shadow-black/5 transition-transform duration-300 hover:-translate-y-2"
                        >
                            {/* Product Image */}
                            <div className="h-44 w-full overflow-hidden rounded-xl sm:h-48">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Product Details (Icon Left, Text Right) */}
                            <div className="flex flex-1 items-start gap-3 px-2 py-4">

                                {/* Icon */}
                                <item.icon
                                    className="mt-1 h-6 w-6 shrink-0 text-caramel"
                                    strokeWidth={1.5}
                                />

                                {/* Text Container */}
                                <div className="flex flex-col">
                                    <h3 className="font-mona text-[17px] font-bold leading-tight text-deep-coffee">
                                        {item.title}
                                    </h3>
                                    <p className="mt-1 font-mona text-xs leading-[1.4] text-deep-coffee/70 sm:text-[13px]">
                                        {item.desc}
                                    </p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Menu;