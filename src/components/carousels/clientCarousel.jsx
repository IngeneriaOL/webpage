"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import clients from "@/data/clients.json";

export default function ClientCarousel() {
    return (
        <div className="relative w-full max-w-4xl mx-auto px-4">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                speed={2000}
            >
                {clients.map((client) => (
                    <SwiperSlide key={client.id} className="w-full">
                        <div className="w-full flex justify-center items-center">
                            <p className="text-lg italic leading-relaxed w-4/5">
                                "{client.text}"
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
