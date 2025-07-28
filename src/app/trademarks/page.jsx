import Header from "@/components/header";
import Footer from "@/components/footer";
import VirtualAssistant from "@/components/virtualAssistant";
import { Aldrich, Jost } from "next/font/google"
import Image from "next/image";

const aldrich = Aldrich({
  variable: "--font-aldrich",
  subsets: ["latin"],
  weight: ["400"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Trademarks() {

  const trademarks = [
    { id: 1, name: "AUTONICS", image: "/images/trademarks/trademark-image-1.webp", color:"#ED861C", description: "Con las soluciones de automatización de Autonics, A Ingeniería optimiza tus procesos industriales, mejorando la eficiencia, reduciendo costos y garantizando un rendimiento preciso y confiable." },
    { id: 2, name: "KINCO", image: "/images/trademarks/trademark-image-2.webp", color:"#ED1C24", description: "Con Kinco, A Ingeniería mejora la eficiencia y precisión de tus procesos industriales, optimizando la productividad y reduciendo costos operativos." },
    { id: 3, name: "XINJE", image: "/images/trademarks/trademark-image-3.webp", color:"#55A6D4", description: "Con XINJE, A Ingeniería optimiza tus procesos industriales, mejorando la eficiencia y reduciendo costos operativos con sistemas fáciles de integrar y de alto rendimiento." },
    { id: 4, name: "SIEMENS", image: "/images/trademarks/trademark-image-4.webp", color:"#009C8C", description: "Con la tecnología de Siemens, A Ingeniería optimiza tus procesos, maximizando la eficiencia y reduciendo costos, todo mediante soluciones innovadoras y de rápida implementación." },
    { id: 5, name: "SCHNEIDER ELECTRIC", image: "/images/trademarks/trademark-image-5.webp", color:"#008C45", description: "Con las soluciones de Schneider Electric, A Ingeniería optimiza la eficiencia, reduce costos y aumenta la productividad mediante tecnología innovadora y fácil integración." },
    { id: 6, name: "CHINT ELECTRIC", image: "/images/trademarks/trademark-image-6.webp", color:"#0064A8", description: "Con los sistemas de Chint Electric, A Ingeniería optimiza la eficiencia, reduce costos y eleva la productividad mediante innovaciones fáciles de integrar." },
    { id: 7, name: "INVERTEK", image: "/images/trademarks/trademark-image-7.webp", color:"#8A4D98", description: "Gracias a Invertek, A Ingeniería optimiza la eficiencia, disminuye costos y potencia la productividad con innovaciones de integración sencilla." },
    { id: 8, name: "RELPOL S.A", image: "/images/trademarks/trademark-image-8.webp", color:"#ED1C24", description: "Con los productos de Relpol S.A., A Ingeniería optimiza la eficiencia, reduce costos y aumenta la productividad, gracias a su innovación y fácil integración en los procesos industriales." },
    { id: 9, name: "ONKA", image: "/images/trademarks/trademark-image-9.webp", color:"#007C8C", description: "Con Onka, A Ingeniería mejora la eficiencia, disminuye costos y eleva la productividad, aprovechando su avanzada capacidad de integración y fiabilidad." },

  ]

  return (
    <div>
      {/* VIRTUAL ASSISTANT COMPONENT */}
      <VirtualAssistant />

      {/* HEADER COMPONENT */}
      <Header />

      <main className="flex flex-col items-center justify-center px-4 py-10 text-gray-600 bg-gray-100">
        <h2 className={`text-center color-red text-3xl mb-8 ${aldrich.className} lg:mb-12`}>NUESTRAS MARCAS</h2>

        <section className="flex flex-col items-center justify-center px-4 gap-8 lg:px-[10%]">
          {trademarks.map((trademark, index) => {
            const isEven = index % 2 === 0;
            const flexDirection = isEven ? 'sm:flex-row' : 'sm:flex-row-reverse';
            
            return (
              <article 
                key={trademark.id} 
                className={`flex flex-col justify-center items-center mb-8 text-center gap-4 sm:gap-8 sm:justify-evenly lg:gap-12 ${flexDirection}`}
              >
                <div className="w-full sm:w-1/2">
                  <h3 className={`text-5xl font-bold ${jost.className} lg:text-7xl`} style={{ color: trademark.color }}>
                    {trademark.name}
                  </h3>
                  <p className="mt-2 lg:text-lg lg:px-[10%]">{trademark.description}</p>
                </div>

                <div className="rounded-lg flex w-full h-auto aspect-square items-center justify-center bg-white shadow-lg sm:w-[30%] hover:scale-105 transition-all duration-300 ease-in-out">
                  <Image
                    src={trademark.image}
                    alt={trademark.name}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </article>
            );
          })}
        </section>
      </main>

      {/*FOOTER COMPONENT */}
      <Footer />
    </div>
  );
}