import "../globals.css";
import { Plus_Jakarta_Sans, Bricolage_Grotesque } from "next/font/google";
import { sharedMetadata } from "@/lib/siteMetadata";

export const metadata = sharedMetadata;

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin", "latin-ext"], weight: ["400", "500", "600", "700", "800"], variable: "--font-jakarta", display: "swap" });
const bricolage = Bricolage_Grotesque({ subsets: ["latin", "latin-ext"], weight: ["600", "700", "800"], variable: "--font-display", display: "swap" });

export default function TurkishRootLayout({ children }) {
  return <html lang="tr" className={`${jakarta.variable} ${bricolage.variable}`}><body>{children}</body></html>;
}
