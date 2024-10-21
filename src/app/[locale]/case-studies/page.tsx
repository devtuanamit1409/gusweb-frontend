import CaseStudies from "@/components/CaseStudiesConponent";
import { fetchCaseStudies } from "@/utils/GlobalApi";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";
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
const page = async () => {
  const localActive = await getLocale();
  const data = await fetchCaseStudies(localActive);
  return <CaseStudies data={data} />;
};

export default page;
