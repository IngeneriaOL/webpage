"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const products = [
    { id: 1, src: "/images/products/product-1.webp", alt: "Producto 1" },
    { id: 2, src: "/images/products/product-2.webp", alt: "Producto 2" },
    { id: 3, src: "/images/products/product-3.webp", alt: "Producto 3" },
    { id: 4, src: "/images/products/product-4.webp", alt: "Producto 4" },
    { id: 5, src: "/images/products/product-5.webp", alt: "Producto 5" },
    { id: 6, src: "/images/products/product-6.webp", alt: "Producto 6" },
    { id: 7, src: "/images/products/product-7.webp", alt: "Producto 7" },
    { id: 8, src: "/images/products/product-8.webp", alt: "Producto 8" },
    { id: 9, src: "/images/products/product-9.webp", alt: "Producto 9" },
    { id: 10, src: "/images/products/product-10.webp", alt: "Producto 10" },
    { id: 11, src: "/images/products/product-11.webp", alt: "Producto 11" },
    { id: 12, src: "/images/products/product-12.webp", alt: "Producto 12" },
    { id: 13, src: "/images/products/product-13.webp", alt: "Producto 13" },
    { id: 14, src: "/images/products/product-14.webp", alt: "Producto 14" },
    { id: 15, src: "/images/products/product-15.webp", alt: "Producto 15" },
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
                speed={1800}
                className="swiper-container !py-4 !px-4"
                autoplay={{
                    delay: 2000,
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
                    <SwiperSlide key={product.id} className="!overflow-visible py-4">
                        <div className="border rounded-md p-12 flex items-center justify-center bg-white shadow-md transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl active:scale-105">
                            <Image
                                src={product.src}
                                alt={product.alt}
                                className="max-h-48 object-contain"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
