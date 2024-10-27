import CaseStudies from "@/components/CaseStudiesConponent";
import { routing } from "@/i18n/routing";
import { fetchCaseStudies } from "@/utils/GlobalApi";
import { Metadata } from "next";
import { getLocale, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import React from "react";
export async function generateMetadata(): Promise<Metadata | undefined> {
  const localActive = await getLocale();
  const caseStudies: any = await fetchCaseStudies(localActive);

  return {
    title: caseStudies.seo.title || "caseStudies Page",
    description: caseStudies.seo.description || "",
    icons: {
      icon: "/images/logo.png",
    },
    openGraph: {
      title: caseStudies.seo.title || "",
      description: caseStudies.seo.description || "",
      url: caseStudies.seo.url || "",
      type: caseStudies.seo.type || "website",
      images: caseStudies.seo.image || "",
    },
  };
}
interface HomeProps {
  params: { locale: "en" | "vi" | "ko" };
}

const page = async ({ params: { locale } }: HomeProps) => {
  setRequestLocale(locale);
  const localActive = await getLocale();
  const data = await fetchCaseStudies(localActive);
  return <CaseStudies data={data} />;
};

export default page;
