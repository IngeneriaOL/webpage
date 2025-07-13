import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import VirtualAssistant from "@/components/virtualAssistant";
import ProductCarousel from "@/components/productCarrusel";

export default function Home() {

  const services = [
    { name: "CATÁLOGO INDUSTRIAL", image: "/images/services/catalogo.jpg", link: "https://www.catalogoindustrial.co/" },
    { name: "AUTOMATIZACIÓN", image: "/images/services/automatizacion.jpg", link: "/automatizacion" },
    { name: "TERMOCUPLAS", image: "/images/services/termocuplas.jpg", link: "/termocuplas" },
  ];

  return (
    <div className="">
      {/* VIRTUAL ASSISTANT COMPONENT */}
      <VirtualAssistant />

      {/* HEADER COMPONENT */}
      <Header />

      <main>
        {/* BANNER SECTION */}
        <section className="relative bg-[url('/images/banner.jpg')] bg-cover bg-center w-full h-[40rem] flex items-center justify-center">
          {/* VIDEO LAYER */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full opacity-30 object-cover z-10 pointer-events-none"
          >
            <source src="/videos/banner.mp4" type="video/mp4" />
            Tu navegador no soporta videos HTML5.
          </video>

          {/* CONTENT */}
          <article className="flex flex-col items-center gap-4 relative z-20 text-white text-center">
            <p className="">Automatización de unidad de taladrado de 8 estaciones</p>
            <p className="font-semibold text-2xl w-3/5">Empresa jafs machines automatización ingenieria ol sas; invertek asi lo dio a conocer en su publicación</p>

            <Link href={"/"} className="inline-block bg-black px-8 py-3 mt-4 rounded-xl font-bold text-sm border-red hover:bg-[#ED1C24] active:bg-[#ED1C24] transition-all duration-300">
              VER PUBLICACIÓN AQUÍ
            </Link>
          </article>
        </section>

        <section className="flex flex-col md:flex-row justify-center gap-6 mt-14">
          {services.map((service, index) => (
            <article key={index} className="flex flex-col items-center justify-center p-8">
              <Image src={service.image} alt={service.name} width={640} height={640} className="object-contain rounded-full w-3/5 h-auto aspect-square sm:w-2/5 md:w-3/5" />

              <Link
                href={service.link} 
                target={service.name === "CATÁLOGO INDUSTRIAL" ? "_blank" : undefined}
                className="text-sm font-bold py-4 px-8 bg-black mt-6 hover:bg-gray-600 active:bg-gray-600 transition-all duration-300 md:text-xs lg:text-sm">
                {service.name}
              </Link>
            </article>
          ))}
        </section>

        <section className="mb-12">
          <h2 className="text-center color-red text-2xl font-bold mt-10 mb-6">NUESTROS PRODUCTOS</h2>
          
          <ProductCarousel />
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