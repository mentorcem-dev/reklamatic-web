import { notFound } from "next/navigation";
import SeoPage, { seoMetadata } from "@/components/clipping/SeoPage";
import { findSeoPage, routeParams } from "@/lib/clippingSeoContent";

export const dynamicParams = false;

export function generateStaticParams() {
  return routeParams("en");
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = findSeoPage("en", slug.join("/"));
  return page ? seoMetadata(page, "en") : {};
}

export default async function EnglishSeoPage({ params }) {
  const { slug } = await params;
  const page = findSeoPage("en", slug.join("/"));
  if (!page) notFound();
  return <SeoPage page={page} locale="en" />;
}
