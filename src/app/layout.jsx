import { Saira } from "next/font/google";
import "@/styles/globals.css";

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "Ingeniería OL",
  description: "Ingeniería OL - Innovación y Tecnología",
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
