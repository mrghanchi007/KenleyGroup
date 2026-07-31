import { Playfair_Display, Jost } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "Kenley Group — Stable Homes Built on Love",
  description:
    "Kenley Group is an award-winning provider of supported and semi-independent accommodation delivering stable homes and tailored support for vulnerable young people and adults across Cambridgeshire and surrounding regions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${jost.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
