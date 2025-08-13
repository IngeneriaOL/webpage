"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import trademarks from "@/data/trademarks";

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
                                src={`/images/trademarks/${trademark.src}`}
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
