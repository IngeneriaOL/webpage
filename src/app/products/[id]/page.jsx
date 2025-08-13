import Header from "@/components/header";
import Footer from "@/components/footer";
import VirtualAssistant from "@/components/virtualAssistant";
import { Aldrich } from "next/font/google"
import Link from "next/link";
import Image from "next/image";
import products from "@/data/products";

const aldrich = Aldrich({
  variable: "--font-aldrich",
  subsets: ["latin"],
  weight: ["400"],
});

export default async function Product ({ params }) {
  const { id } = await params

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
        <h1 className={`text-center color-red text-4xl mb-8 ${aldrich.className} lg:mb-12`}>{product.name}</h1>

        <section className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product image */}
            <div className="aspect-square bg-gray-50 rounded-lg p-6 flex items-center justify-center">
              <Image
                src={`/images/products/${product.src}`}
                alt={product.alt}
                width={400}
                height={400}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Product info */}
            <div className="flex flex-col justify-center">
              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.description}
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