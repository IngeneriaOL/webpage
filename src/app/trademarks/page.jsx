
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VirtualAssistant from "@/components/VirtualAssistant";

export default function Trademarks() {

  return (
    <div>
      {/* VIRTUAL ASSISTANT COMPONENT */}
      <VirtualAssistant />

      {/* HEADER COMPONENT */}
      <Header />

      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black text-5xl">
        <h2>PAGINA EN DESARROLLO</h2>
      </main>

      {/*FOOTER COMPONENT */}
      <Footer />
    </div>
  );
}