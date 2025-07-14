"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

const trademarks = [
    { id: 1, src: "/images/trademarks/trademark-1.png", alt: "Marca comercial 1" },
    { id: 2, src: "/images/trademarks/trademark-2.png", alt: "Marca comercial 2" },
    { id: 3, src: "/images/trademarks/trademark-3.png", alt: "Marca comercial 3" },
    { id: 4, src: "/images/trademarks/trademark-4.png", alt: "Marca comercial 4" },
    { id: 5, src: "/images/trademarks/trademark-5.png", alt: "Marca comercial 5" },
    { id: 6, src: "/images/trademarks/trademark-6.png", alt: "Marca comercial 6" },
    { id: 7, src: "/images/trademarks/trademark-7.png", alt: "Marca comercial 7" },
    { id: 8, src: "/images/trademarks/trademark-8.png", alt: "Marca comercial 8" },
    { id: 9, src: "/images/trademarks/trademark-9.png", alt: "Marca comercial 9" },
];

export default function TrademarkCarousel() {
    return (
        <div className="relative w-full max-w-7xl mx-auto">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={'auto'}
                loop={true}
                freeMode={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
                speed={5000}
                allowTouchMove={false}
                className="swiper-container"
                breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
            >
                {trademarks.map((trademark) => (
                    <SwiperSlide key={trademark.id} className="flex items-center justify-center">
                        <div className="rounded-md p-6 bg-white border shadow-sm h-32 w-full flex items-center justify-center">
                            <Image
                                src={trademark.src}
                                alt={trademark.alt}
                                className="max-h-20 max-w-40 object-contain"
                                width={200}
                                height={100}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
