"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const products = [
    { id: 1, src: "/images/products/product-1.png", alt: "Producto 1" },
    { id: 2, src: "/images/products/product-2.png", alt: "Producto 2" },
    { id: 3, src: "/images/products/product-3.png", alt: "Producto 3" },
    { id: 4, src: "/images/products/product-4.png", alt: "Producto 4" },
    { id: 5, src: "/images/products/product-5.png", alt: "Producto 5" },
    { id: 6, src: "/images/products/product-6.png", alt: "Producto 6" },
    { id: 7, src: "/images/products/product-7.png", alt: "Producto 7" },
    { id: 8, src: "/images/products/product-8.png", alt: "Producto 8" },
    { id: 9, src: "/images/products/product-9.png", alt: "Producto 9" },
    { id: 10, src: "/images/products/product-10.png", alt: "Producto 10" },
    { id: 11, src: "/images/products/product-11.png", alt: "Producto 11" },
    { id: 12, src: "/images/products/product-12.png", alt: "Producto 12" },
    { id: 13, src: "/images/products/product-13.png", alt: "Producto 13" },
    { id: 14, src: "/images/products/product-14.png", alt: "Producto 14" },
    { id: 15, src: "/images/products/product-15.png", alt: "Producto 15" },
];

export default function ProductCarousel() {
    return (
        <div className="relative w-full max-w-7xl mx-auto px-4">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                loop
                className="swiper-container"
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className="border rounded-md p-12 flex items-center justify-center bg-white">
                            <img src={product.src} alt={product.alt} className="max-h-48 object-contain" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
