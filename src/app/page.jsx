"use client"
import Image from "next/image";
import Link from "next/link";
import { Aldrich, Agdasima } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import VirtualAssistant from "@/components/virtualAssistant";
import ProductCarousel from "@/components/carousels/productCarousel";
import BrandCarousel from "@/components/carousels/trademarkCarousel";
import ClientCarousel from "@/components/carousels/clientCarousel";
import WorkCarousel from "@/components/carousels/workCarousel";
import Button from "@/components/ui/button";
import { Clapperboard, Globe } from "lucide-react"

const aldrich = Aldrich({
  variable: "--font-aldrich",
  subsets: ["latin"],
  weight: ["400"],
});

const agdasima = Agdasima({
  variable: "--font-agdasima",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function Home() {

  const services = [
    { name: "CATÁLOGO INDUSTRIAL", image: "/images/services/catalogo.webp", link: "https://www.catalogoindustrial.co/" },
    { name: "AUTOMATIZACIÓN", image: "/images/services/automatizacion.webp", link: "/automatizacion" },
    { name: "TERMOCUPLAS", image: "/images/services/termocuplas.webp", link: "/termocuplas" },
  ];

  const videos = [
    { title: "Automatización maquina termoformadora", src: "/videos/VIDEO-1.webm" },
    { title: "Control de bombas unicentro girardot", src: "/videos/VIDEO-2.webm" },
    { title: "Dosificador automatizado", src: "/videos/VIDEO-3.webm" },
    { title: "Maquina de seriografia 4 colores", src: "/videos/VIDEO-4.webm" },
  ];


  return (
    <div>
      {/* VIRTUAL ASSISTANT COMPONENT */}
      <VirtualAssistant />

      {/* HEADER COMPONENT */}
      <Header />

      <main>
        {/* BANNER SECTION */}
        <section className="relative bg-[url('/images/backgrounds/banner.webp')] bg-cover bg-center w-full h-[40rem] flex items-center justify-center">
          {/* VIDEO LAYER */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full opacity-20 object-cover z-10 pointer-events-none"
          >
            <source src="/videos/banner.webm" type="video/webm" />
            Tu navegador no soporta videos HTML5.
          </video>

          {/* CONTENT */}
          <article className="flex flex-col items-center gap-4 relative z-20 text-white text-center">
            <p className="">Automatización de unidad de taladrado de 8 estaciones</p>
            <p className={`${aldrich.className} text-2xl w-3/5`}>Empresa jafs machines automatización ingenieria ol sas; invertek asi lo dio a conocer en su publicación</p>

            <Link href={"/"} className="inline-block bg-black px-8 py-3 mt-4 rounded-xl font-bold text-sm border-red hover:bg-[#ED1C24] active:bg-[#ED1C24] transition-all duration-300">
              VER PUBLICACIÓN AQUÍ
            </Link>
          </article>
        </section>

        {/* SERVICES SECTION */}
        <section className="flex flex-col md:flex-row justify-center gap-6 mt-14">
          {services.map((service, index) => (
            <article key={index} className="flex flex-col items-center justify-center p-8">
              <Image src={service.image} alt={service.name} width={640} height={640} className="object-contain shadow-2xl rounded-full w-3/5 h-auto aspect-square sm:w-2/5 md:w-3/5" />

              <Button
                href={service.link}
                target={service.name === "CATÁLOGO INDUSTRIAL" ? "_blank" : undefined}
                variant="primary"
                size="medium"
                className="mt-6"
              >
                {service.name}
              </Button>
            </article>
          ))}
        </section>

        {/* PRODUCTS CAROUSEL SECTION */}
        <section className="mb-12">
          <h2 className={`text-center color-red text-3xl mt-10 mb-6 ${aldrich.className}`}>NUESTROS PRODUCTOS</h2>

          <ProductCarousel />
        </section>

        {/* AUTOMATIZATION SECTION */}
        <section className="px-4">
          <article className={`${aldrich.className} flex flex-col items-center text-center mb-10`}>
            <p className="color-red text-6xl mb-4">Ingeniería OL</p>
            <p className="text-black">Sistemas automáticos confiables para tu industria.</p>
          </article>

          <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
            {videos.map((video, index) => (
              <div key={index} className="video-card overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all hover:scale-105 active:shadow-xl flex flex-col">
                <div className="flex-shrink-0">
                  <video
                    controls
                    className="w-full h-full object-cover aspect-video"
                    src={video.src}
                    onPlay={(e) => {
                      e.target.closest('.video-card').classList.add('playing');
                    }}
                    onPause={(e) => {
                      e.target.closest('.video-card').classList.remove('playing');
                    }}
                    onEnded={(e) => {
                      e.target.closest('.video-card').classList.remove('playing');
                    }}
                  />
                </div>

                <div className={`${aldrich.className} video-info p-3 flex justify-center items-center gap-2 relative overflow-hidden flex-1 min-h-[80px]`}>
                  {/* Burbujas animadas */}
                  <div className="bubble bubble-1"></div>
                  <div className="bubble bubble-2"></div>
                  <div className="bubble bubble-3"></div>
                  <div className="bubble bubble-4"></div>
                  <div className="bubble bubble-5"></div>

                  {/* Contenido */}
                  <Clapperboard className="color-red z-10 relative w-6 h-6 flex-shrink-0" />
                  <p className="text-black z-10 relative text-xs leading-tight lg:text-sm">{video.title}</p>
                </div>
              </div>
            ))}
          </article>
        </section>

        {/* SUSCRIPTION SECTION */}
        <section className="my-20 parallax-section relative bg-[url('/images/backgrounds/suscription.webp')] bg-cover bg-center h-screen flex flex-col items-center justify-center text-center gap-10">
          {/* Capa para reducir opacidad de la imagen */}
          <div className="absolute inset-0 bg-white/50 z-5"></div>

          {/* Degradado rojo horizontal */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-600/30 z-10"></div>

          {/* Contenido */}
          <div className="relative z-20 flex flex-col items-center gap-10">
            <p className="font-bold text-white">Ingeniería OL SAS</p>
            <p className={`font-bold text-4xl w-4/5 text-white ${agdasima.className} md:text-6xl lg:w-3/5`}>Déjanos tu email, suscríbete, estarás al tanto de los nuevos lanzamientos y futuros descuentos exclusivos</p>

            <article className="flex flex-col w-full items-center justify-center gap-6 md:flex-row md:gap-2">
              <input
                type="email"
                name="email"
                id="email"
                required
                autoComplete="email"
                className="px-4 py-4 w-4/5 text-sm text-gray-400 bg-white focus:outline-none focus:border-transparent md:w-2/5"
                placeholder="Ingresa tu correo electrónico"
              />

              <button
                type="submit"
                className="text-sm font-bold py-4 px-8 bg-black text-white hover:bg-gray-600 active:bg-gray-600 transition-all duration-300 md:text-xs lg:text-sm"
              >
                SUSCRIBIRME
              </button>
            </article>
          </div>
        </section>

        {/* WORKS SECTION */}
        <section className="mb-20 px-4 md:flex md:flex-row-reverse items-center md:px-[10%] md:gap-10 lg:px-[15%] lg:gap-20">
          <article className="flex flex-col items-center text-center mb-10 text-black md:mb-0 md:items-start md:text-left">
            <div className="color-red font-bold flex items-center justify-center gap-2">
              <Globe />
              <p>ELÉCTRICOS</p>
            </div>

            <p className={`${aldrich.className} text-3xl my-4 lg:text-5xl`}>Innovación y eficiencia para tus procesos industriales</p>
            <p className="lg:text-lg">Ingeniería OL; calidad y precisión en cada solución.</p>
          </article>

          <article className="w-full md:w-1/2 aspect-[3/4] lg:w-2/5">
            <WorkCarousel />
          </article>
        </section>

        {/* BRANDS SECTION */}
        <section className="px-4">
          <article className={`${aldrich.className} flex flex-col items-center text-center mb-10`}>
            <p className="color-red text-3xl mb-4">NUESTRAS MARCAS</p>
            <p className="text-black">Marcas aliadas que impulsan la innovación y la calidad.</p>
          </article>

          <BrandCarousel />
        </section>

        {/* CLIENTS SECTION */}
        <section className="mt-20 relative bg-[url('/images/backgrounds/clients.webp')] bg-cover bg-center h-screen flex flex-col items-center justify-center text-center gap-10">

          {/* Degradado rojo vertical */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-600/60 to-red-800 z-10"></div>

          {/* Contenido */}
          <div className="relative z-20 flex flex-col items-center gap-16 w-full px-8">
            <p className={`font-bold text-3xl ${aldrich.className} md:text-4xl lg:text-5xl`}>¿Qué dicen nuestros clientes?</p>

            <ClientCarousel />

            <p className={`font-bold ${aldrich.className}`}>INGENIERÍA OL SAS</p>
          </div>
        </section>

        {/* MAP SECTION */}
        <section>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.940706035168!2d-74.07891062552733!3d4.6046397424838785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a07cb01b77%3A0xfa8fec13b1377cc9!2sAutomatizaci%C3%B3n%20e%20Ingenier%C3%ADa%20OL!5e0!3m2!1ses!2sco!4v1752374524121!5m2!1ses!2sco"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </main>

      {/*FOOTER COMPONENT */}
      <Footer />
    </div>
  );
}