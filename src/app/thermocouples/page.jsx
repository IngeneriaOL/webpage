import Header from "@/components/header";
import Footer from "@/components/footer";
import VirtualAssistant from "@/components/virtualAssistant";
import { Aldrich, Jost } from "next/font/google"
import Image from "next/image";
import thermocouples from "@/data/thermocouples.json"

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

export default function Thermocouples() {

  const benefits = [
    { id: 1, title: "Amplio rango térmico", text: "Miden desde -200 °C hasta +2000 °C." },
    { id: 2, title: "Rápida respuesta", text: "Detectan cambios de temperatura al instante." },
    { id: 3, title: "Resistentes", text: "Soportan altas temperaturas y ambientes extremos." },
    { id: 4, title: "Versátiles", text: "Se adaptan a múltiples aplicaciones y equipos." },
    { id: 5, title: "Económicas", text: "Ofrecen medición precisa a bajo costo." },
  ];

  return (
    <div>
      {/* VIRTUAL ASSISTANT COMPONENT */}
      <VirtualAssistant />

      {/* HEADER COMPONENT */}
      <Header />

      <main className="flex flex-col items-center justify-center pt-10 text-gray-600 bg-gray-100">
        <h2 className={`text-center color-red text-4xl mb-8 ${aldrich.className} lg:mb-12`}>TERMOCUPLAS</h2>

        <section className="flex flex-col items-center justify-center px-4 mb-12 gap-8 lg:px-[10%] md:flex-row md:justify-evenly">
          <div className="w-3/5 mb-8 sm:w-1/3 md:w-1/4 md:mb-0 lg:w-1/5">
            <Image src="/images/termocupla.webp" alt="Termocupla 1" width={570} height={813} className="w-full h-full object-contain" />
          </div>

          <article className="flex flex-col text-sm justify-center w-4/5 gap-6 md:w-3/5 md:text-xs md:flex-row">
            <div className="md:w-1/2">
              <h3 className="font-bold text-lg">Termocuplas:</h3>

              <p>En A Ingeniería OL, ofrecemos termocuplas para medición precisa de temperatura en aplicaciones industriales. Disponemos de los siguientes tipos:</p>

              <ul className="list-disc pl-5 mt-2">
                <li><span className="font-bold">Tipo K:</span> Amplio rango de temperaturas.</li>
                <li><span className="font-bold">Tipo J:</span> Ideal para aplicaciones de baja temperatura.</li>
                <li><span className="font-bold">Tipo T:</span> Excelente estabilidad a largo plazo.</li>
              </ul>
            </div>

            <div className="md:w-1/2">
              <h3 className="font-bold text-lg">Principales usos:</h3>

              <ul className="list-disc pl-5 mt-2">
                <li>Medición de temperatura en hornos industriales.</li>
                <li>Control de procesos en la industria alimentaria.</li>
                <li>Monitoreo de temperatura en sistemas HVAC.</li>
                <li>Automatización y sistemas de calefacción.</li>
              </ul>
            </div>
          </article>
        </section>

        <section className="flex flex-col items-center justify-center px-4 gap-8 mb-12 lg:px-[10%]">
          {thermocouples.map((thermocouple, index) => {
            const isEven = index % 2 === 0;
            const flexDirection = isEven ? 'sm:flex-row' : 'sm:flex-row-reverse';

            return (
              <article
                key={thermocouple.id}
                className={`flex flex-col justify-center w-full items-center mb-8 text-center gap-4 sm:gap-8 sm:justify-evenly lg:gap-12 ${flexDirection}`}
              >
                <div className="w-full sm:w-1/2">
                  <p className={`mt-2 lg:text-xl lg:px-[10%] ${aldrich.className} color-red`}>{thermocouple.name}</p>
                </div>

                <div className="rounded-lg flex w-full h-auto aspect-square items-center justify-center bg-white shadow-lg sm:w-[30%] hover:scale-105 transition-all duration-300 ease-in-out">
                  <Image
                    src={`/images/thermocouples/${thermocouple.image}`}
                    alt={thermocouple.name}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </article>
            );
          })}
        </section>

        <section className="w-full relative bg-[url('/images/backgrounds/benefits.webp')] bg-cover bg-center py-32 px-4">
          <div className="absolute inset-0 bg-white/90 z-0"></div>

          <div className="relative z-10">
            <h3 className={`text-center text-4xl ${aldrich.className} mb-8`}>Beneficios</h3>

            <article className="flex flex-col gap-6 px-[10%] md:flex-row md:flex-wrap md:justify-evenly">
              {benefits.map((benefit) => (
                <div
                  key={benefit.id}
                  className="flex flex-col justify-center items-center bg-white p-8 text-center rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 md:p-4 md:aspect-[3/4] md:w-1/4 lg:w-1/6"
                >
                  <h4 className="font-bold">{benefit.title}</h4>
                  <p>{benefit.text}</p>
                </div>
              ))}
            </article>
          </div>
        </section>
      </main>

      {/*FOOTER COMPONENT */}
      <Footer />
    </div>
  );
}