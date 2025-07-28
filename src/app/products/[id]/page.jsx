import Header from "@/components/header";
import Footer from "@/components/footer";
import VirtualAssistant from "@/components/virtualAssistant";
import { Aldrich } from "next/font/google"
import Link from "next/link";
import Image from "next/image";

const aldrich = Aldrich({
  variable: "--font-aldrich",
  subsets: ["latin"],
  weight: ["400"],
});

export default async function Product ({ params }) {
  const { id } = await params

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

  // ID PRODUCT
  const productId = parseInt(id);

  // SEARCH PRODUCT
  const product = products.find(p => p.id === productId);

  // ERROR 404
  if (!product) {
    return (
      <div>
        <VirtualAssistant />
        <Header />
        <main className="flex flex-col items-center justify-center px-4 py-20 text-gray-600 bg-gray-100 min-h-screen">
          <h1 className="text-4xl font-bold text-red-600 mb-4">404</h1>
          <h2 className="text-2xl mb-8">Producto no encontrado</h2>
          <Link
            href="/products"
            className="bg-red-600 font-bold text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            Volver a productos
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      {/* VIRTUAL ASSISTANT COMPONENT */}
      <VirtualAssistant />

      {/* HEADER COMPONENT */}
      <Header />

      <main className="flex flex-col items-center justify-center px-4 py-10 text-gray-600 bg-gray-100">
        <h2 className={`text-center color-red text-4xl mb-8 ${aldrich.className} lg:mb-12`}>{product.name}</h2>

        <section className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product image */}
            <div className="aspect-square bg-gray-50 rounded-lg p-6 flex items-center justify-center">
              <Image
                src={product.src}
                alt={product.alt}
                width={400}
                height={400}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Product info */}
            <div className="flex flex-col justify-center">
              <p className="text-gray-600 mb-6 leading-relaxed">
                Descripción detallada del {product.name}. Aquí se debe agregar 
                especificaciones técnicas, características y más información relevante.
              </p>

              <div className="flex flex-col gap-4">
                <Link
                  href={`https://wa.me/573168225865?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20el%20producto%20${product.name}`}
                  target="_blank"
                  className="w-full text-center font-bold bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Solicitar Cotización
                </Link>
                <Link
                  href="/products"
                  className="w-full text-center font-bold border border-red-600 text-red-600 py-3 px-6 rounded-lg hover:bg-red-50 transition-colors"
                >
                  Volver a productos
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/*FOOTER COMPONENT */}
      <Footer />
    </div>
  );
}