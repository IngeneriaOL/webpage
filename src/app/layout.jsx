import { Saira } from "next/font/google";
import "@/styles/globals.css";

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "Ingeniería OL - Automatización Industrial | Bogotá - Colombia",
  description:
    "Mejore la productividad de su empresa con nuestras soluciones de automatización industrial. Distribución de material eléctrico, asesoría técnica y soporte especializado en Bogotá desde 2014.",
  keywords:
    "automatización industrial Bogotá, material eléctrico industrial, soluciones industriales Colombia, ingeniería automatización, Autonics Colombia, Siemens distribuidor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${saira.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
