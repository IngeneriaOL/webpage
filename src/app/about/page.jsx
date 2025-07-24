import Header from "@/components/header";
import Footer from "@/components/footer";
import VirtualAssistant from "@/components/virtualAssistant";
import { Aldrich } from "next/font/google"

const aldrich = Aldrich({
  variable: "--font-aldrich",
  subsets: ["latin"],
  weight: ["400"],
});

export default function About() {

  return (
    <div>
      {/* VIRTUAL ASSISTANT COMPONENT */}
      <VirtualAssistant />

      {/* HEADER COMPONENT */}
      <Header />

      <main className="flex flex-col items-center justify-center text-gray-600 px-4 py-10">
        <h2 className={`text-center color-red text-3xl mb-6 ${aldrich.className}`}>QUIÉNES SOMOS</h2>

        <p className="max-w-4xl text-center leading-relaxed text-lg">
          Desde 2014, nos posicionamos como líderes en la distribución de material eléctrico industrial,
          respaldados por un sólido compromiso con la calidad y el servicio. Nuestro equipo de ingeniería
          y ventas se enfoca en ofrecer soluciones competitivas a través de una combinación de organización
          estratégica, cumplimiento riguroso y capacitación constante. Nos dedicamos a mejorar la
          productividad de nuestros clientes con propuestas personalizadas que responden a las necesidades
          específicas de cada proyecto. Estamos preparados para brindar asesoría y productos que impulsen la
          eficiencia y el éxito en el sector industrial.
        </p>

        <article className="w-full max-w-4xl my-10 px-4">
          {/* Video title */}
          <h3 className={`text-center color-red text-xl mb-6 ${aldrich.className}`}>
            CONOCE NUESTRA EMPRESA
          </h3>
          
          {/* Video container */}
          <div className="relative">
            {/* Decorative border */}
            <div className="absolute -inset-2 bg-gradient-to-r from-red-600 to-red-400 rounded-2xl blur opacity-20"></div>
            
            {/* Main video container */}
            <div className="relative bg-white p-4 rounded-xl shadow-xl">
              <div className="aspect-video rounded-lg overflow-hidden bg-black">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                >
                  <source src="/videos/about.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>
            </div>
          </div>
        </article>

        <p className={`text-center color-red text-2xl mb-8 mt-4 ${aldrich.className}`}>
          Valores que impulsan la innovación y la eficiencia industrial
        </p>

        <article className="flex flex-col p-4 md:flex-row items-start justify-center w-full max-w-6xl gap-8">
          <ul className="flex-1 space-y-4 list-disc font-bold">
            <li>
              <span>Capacitación continua: </span>
              <span className="text-gray-600 font-normal">Actualización constante para un mejor servicio.</span>
            </li>
            <li>
              <span>Adaptabilidad: </span>
              <span className="text-gray-600 font-normal">Soluciones personalizadas según las necesidades de cada cliente.</span>
            </li>
            <li>
              <span>Servicio al cliente: </span>
              <span className="text-gray-600 font-normal">Atención enfocada en satisfacción y asesoramiento especializado.</span>
            </li>
          </ul>

          <div className="hidden md:block w-px bg-gray-600 self-stretch mx-4"></div>

          <div className="block md:hidden h-px w-full bg-gray-600"></div>

          <ul className="flex-1 space-y-4 list-disc font-bold">
            <li>
              <span>Innovación: </span>
              <span className="text-gray-600 font-normal">Soluciones automatizadas con tecnología avanzada.</span>
            </li>
            <li>
              <span>Calidad: </span>
              <span className="text-gray-600 font-normal">Compromiso con altos estándares en productos y servicios.</span>
            </li>
            <li>
              <span>Cumplimiento: </span>
              <span className="text-gray-600 font-normal">Enfoque en respetar plazos y expectativas.</span>
            </li>
            <li>
              <span>Productividad: </span>
              <span className="text-gray-600 font-normal">Propuestas que optimizan procesos industriales.</span>
            </li>
          </ul>
        </article>
      </main>

      {/*FOOTER COMPONENT */}
      <Footer />
    </div>
  );
}