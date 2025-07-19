
import Header from "@/components/header";
import Footer from "@/components/footer";
import VirtualAssistant from "@/components/virtualAssistant";

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