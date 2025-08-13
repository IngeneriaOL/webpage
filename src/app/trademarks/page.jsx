import Header from "@/components/header";
import Footer from "@/components/footer";
import VirtualAssistant from "@/components/virtualAssistant";
import { Aldrich, Jost } from "next/font/google"
import Image from "next/image";
import trademarks from "@/data/trademarks.json";

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

  return (
    <div>
      {/* VIRTUAL ASSISTANT COMPONENT */}
      <VirtualAssistant />

      {/* HEADER COMPONENT */}
      <Header />

      <main className="flex flex-col items-center justify-center px-4 py-10 text-gray-600 bg-gray-100">
        <h2 className={`text-center color-red text-4xl mb-8 ${aldrich.className} lg:mb-12`}>NUESTRAS MARCAS</h2>

        <section className="flex flex-col items-center justify-center px-4 gap-8 lg:px-[10%]">
          {trademarks.map((trademark, index) => {
            const isEven = index % 2 === 0;
            const flexDirection = isEven ? 'sm:flex-row' : 'sm:flex-row-reverse';
            
            return (
              <article 
                key={trademark.id} 
                className={`flex flex-col justify-center items-center w-full mb-8 text-center gap-4 sm:gap-8 sm:justify-evenly lg:gap-12 ${flexDirection}`}
              >
                <div className="w-full sm:w-1/2">
                  <h3 className={`text-5xl font-bold ${jost.className} lg:text-7xl`} style={{ color: trademark.color }}>
                    {trademark.name}
                  </h3>
                  <p className="mt-2 lg:text-lg lg:px-[10%]">{trademark.description}</p>
                </div>

                <div className="rounded-lg flex w-full h-auto aspect-square items-center justify-center bg-white shadow-lg sm:w-[30%] hover:scale-105 transition-all duration-300 ease-in-out">
                  <Image
                    src={`/images/trademarks/${trademark.image}`}
                    alt={trademark.alt}
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