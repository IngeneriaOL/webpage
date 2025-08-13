import Header from "@/components/header";
import Footer from "@/components/footer";
import VirtualAssistant from "@/components/virtualAssistant";
import { Aldrich } from "next/font/google"
import Image from "next/image";
import Link from "next/link";
import products from "@/data/products";

const aldrich = Aldrich({
  variable: "--font-aldrich",
  subsets: ["latin"],
  weight: ["400"],
});

export default function Products() {

  return (
    <div>
      {/* VIRTUAL ASSISTANT COMPONENT */}
      <VirtualAssistant />

      {/* HEADER COMPONENT */}
      <Header />

      <main className="flex flex-col items-center justify-center px-4 py-10 text-gray-600 bg-gray-100 min-h-screen">
        <h2 className={`text-center color-red text-4xl mb-8 ${aldrich.className} lg:mb-12`}>
          NUESTROS PRODUCTOS
        </h2>

        {/* PRODUCTS SECTION */}
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 max-w-7xl w-full">
          {products.map((product) => (
            <Link
              href={`/products/${product.id}`}
              key={product.id} 
              className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              {/* Image container */}
              <div className="aspect-square p-4 flex items-center justify-center bg-gray-50">
                <Image
                  src={`/images/products/${product.src}`}
                  alt={product.alt}
                  width={300}
                  height={300}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Product name */}
              <div className="p-4 border-t">
                <p className="text-center font-medium text-gray-600 hover:color-red transition-colors text-sm sm:text-base">
                  {product.name}
                </p>
              </div>
            </ Link>
          ))}
        </section>
      </main>

      {/* FOOTER COMPONENT */}
      <Footer />
    </div>
  );
}