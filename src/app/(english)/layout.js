import "../globals.css";
import { sharedMetadata } from "@/lib/siteMetadata";

export const metadata = sharedMetadata;

export default function EnglishLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
