import { notFound } from "next/navigation";
import SeoPage, { seoMetadata } from "@/components/clipping/SeoPage";
import { findSeoPage, routeParams } from "@/lib/clippingSeoContent";

export const dynamicParams = false;

export function generateStaticParams() {
  return routeParams("tr");
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = findSeoPage("tr", slug.join("/"));
  return page ? seoMetadata(page, "tr") : {};
}

export default async function TurkishSeoPage({ params }) {
  const { slug } = await params;
  const page = findSeoPage("tr", slug.join("/"));
  if (!page) notFound();
  return <SeoPage page={page} locale="tr" />;
}
