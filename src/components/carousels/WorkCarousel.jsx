"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

const works = [
    { id: 1, src: "/images/works/work-1.webp", alt: "Trabajo 1" },
    { id: 2, src: "/images/works/work-2.webp", alt: "Trabajo 2" },
    { id: 3, src: "/images/works/work-3.webp", alt: "Trabajo 3" },
    { id: 4, src: "/images/works/work-4.webp", alt: "Trabajo 4" },
    { id: 5, src: "/images/works/work-5.webp", alt: "Trabajo 5" },
    { id: 6, src: "/images/works/work-6.webp", alt: "Trabajo 6" },
    { id: 7, src: "/images/works/work-7.webp", alt: "Trabajo 7" }
];

export default function WorkCarousel() {
    return (
        <div className="relative w-full h-full mx-auto">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                className="w-full h-full"
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                speed={2000}
            >
                {works.map((work) => (
                    <SwiperSlide key={work.id} className="w-full h-full">
                        <div className="rounded-md h-full flex items-center justify-center">
                            <Image
                                src={work.src}
                                alt={work.alt}
                                className="w-full h-auto object-cover"
                                width={300}
                                height={500}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
