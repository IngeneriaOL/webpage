"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import products from "@/data/products";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
                        <Link
                            href={`/products/${product.id}`}
                            className="border rounded-md p-12 flex items-center justify-center bg-white shadow-md transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl active:scale-105">
                            <Image
                                src={`/images/products/${product.src}`}
                                alt={product.alt}
                                className="max-h-48 object-contain"
                                width={1000}
                                height={1000}
                            />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
