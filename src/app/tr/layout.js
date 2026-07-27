import "../globals.css";
import { sharedMetadata } from "@/lib/siteMetadata";

export const metadata = sharedMetadata;

export default function TurkishLayout({ children }) {
  return <html lang="tr"><body>{children}</body></html>;
}
