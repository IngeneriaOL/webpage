import Header from "@/components/header";
import Footer from "@/components/footer";
import VirtualAssistant from "@/components/virtualAssistant";
import { Aldrich } from "next/font/google"
import Image from "next/image";
import Link from "next/link";

const aldrich = Aldrich({
  variable: "--font-aldrich",
  subsets: ["latin"],
  weight: ["400"],
});

export default function Products() {

  const products = [
    { id: 1, name: "Producto 1", src: "/images/products/product-1.webp", alt: "Producto 1" },
    { id: 2, name: "Producto 2", src: "/images/products/product-2.webp", alt: "Producto 2" },
    { id: 3, name: "Producto 3", src: "/images/products/product-3.webp", alt: "Producto 3" },
    { id: 4, name: "Producto 4", src: "/images/products/product-4.webp", alt: "Producto 4" },
    { id: 5, name: "Producto 5", src: "/images/products/product-5.webp", alt: "Producto 5" },
    { id: 6, name: "Producto 6", src: "/images/products/product-6.webp", alt: "Producto 6" },
    { id: 7, name: "Producto 7", src: "/images/products/product-7.webp", alt: "Producto 7" },
    { id: 8, name: "Producto 8", src: "/images/products/product-8.webp", alt: "Producto 8" },
    { id: 9, name: "Producto 9", src: "/images/products/product-9.webp", alt: "Producto 9" },
    { id: 10, name: "Producto 10", src: "/images/products/product-10.webp", alt: "Producto 10" },
    { id: 11, name: "Producto 11", src: "/images/products/product-11.webp", alt: "Producto 11" },
    { id: 12, name: "Producto 12", src: "/images/products/product-12.webp", alt: "Producto 12" },
    { id: 13, name: "Producto 13", src: "/images/products/product-13.webp", alt: "Producto 13" },
    { id: 14, name: "Producto 14", src: "/images/products/product-14.webp", alt: "Producto 14" },
    { id: 15, name: "Producto 15", src: "/images/products/product-15.webp", alt: "Producto 15" },
  ];

  return (
    <div>
      {/* VIRTUAL ASSISTANT COMPONENT */}
      <VirtualAssistant />

      {/* HEADER COMPONENT */}
      <Header />

      <main className="flex flex-col items-center justify-center px-4 py-10 text-gray-600 bg-gray-100 min-h-screen">
        <h2 className={`text-center color-red text-3xl mb-8 ${aldrich.className} lg:mb-12`}>
          NUESTROS PRODUCTOS
        </h2>

        {/* Grid responsive section */}
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
                  src={product.src}
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