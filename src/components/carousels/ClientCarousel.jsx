"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const clients = [
    { id: 1, text: "Ingeniería OL, hemos optimizado nuestra línea de producción con sistemas automatizados de alta precisión. Su equipo nos brindó asesoría constante y personalizada, asegurando que cada solución se ajustara a nuestras necesidades específicas. ¡Recomendamos sus servicios sin dudarlo!" },
    { id: 2, text: "La implementación de termocuplas suministradas por Ingeniería OL ha mejorado significativamente el control de temperatura en nuestros procesos. La calidad de sus productos y su compromiso con el servicio al cliente son insuperables." },
    { id: 3, text: "Trabajar con  Ingeniería OL fue una experiencia fluida y efectiva. Sus soluciones en automatización han incrementado la eficiencia operativa de nuestra planta, y su soporte técnico siempre está disponible cuando lo necesitamos." },
];

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
