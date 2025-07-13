import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import VirtualAssistant from "@/components/virtualAssistant";

export default function Home() {
  return (
    <div className="">
      <Header />
      <VirtualAssistant />
      
      

      <article>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.940706035168!2d-74.07891062552733!3d4.6046397424838785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a07cb01b77%3A0xfa8fec13b1377cc9!2sAutomatizaci%C3%B3n%20e%20Ingenier%C3%ADa%20OL!5e0!3m2!1ses!2sco!4v1752374524121!5m2!1ses!2sco" 
          width="100%" 
          height="450" 
          style={{border: 0}} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </article>

      <Footer />
    </div>
  );
}