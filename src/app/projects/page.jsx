import Header from "@/components/header";
import Footer from "@/components/footer";
import VirtualAssistant from "@/components/virtualAssistant";
import { Aldrich } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import projects from "@/data/projects.json";

const aldrich = Aldrich({
  variable: "--font-aldrich",
  subsets: ["latin"],
  weight: ["400"],
});

export default function Projects() {

  return (
    <div>
      {/* VIRTUAL ASSISTANT COMPONENT */}
      <VirtualAssistant />

      {/* HEADER COMPONENT */}
      <Header />

      <main className="flex flex-col items-center justify-center text-gray-600 px-4 py-10 bg-gray-100 min-h-screen">
        <h1 className={`text-center color-red text-4xl mb-8 ${aldrich.className} lg:mb-12`}>
          NUESTROS PROYECTOS
        </h1>

        {/* Projects Grid */}
        <section className="w-full max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <article 
                key={project.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={`/images/projects/${project.image}`}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className={`text-xl font-bold color-red mb-2 ${aldrich.className}`}>
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-500 font-medium">
                      {project.date}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="border-t pt-4">
                    <p className="text-xs text-gray-500">
                      <span className="font-medium">Cliente:</span> {project.client}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="w-full max-w-4xl mt-16 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className={`text-2xl font-bold color-red mb-4 ${aldrich.className}`}>
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-gray-600 mb-6">
              Contáctanos para desarrollar soluciones personalizadas que impulsen la eficiencia de tu empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://wa.me/573168225865?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20proyectos%20de%20automatización"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                Solicitar Cotización
              </ Link>

              <Link
                href="/products"
                className="border border-red-600 text-red-600 px-6 py-3 rounded-lg hover:bg-red-50 transition-colors font-medium"
              >
                Nuestros Productos
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER COMPONENT */}
      <Footer />
    </div>
  );
}