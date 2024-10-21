import AboutUsPage from "@/components/AboutUsPage";
import { fetchAboutUsPage } from "@/utils/GlobalApi";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";
import React from "react";
export async function generateMetadata({
  params,
}: any): Promise<Metadata | undefined> {
  const localActive = await getLocale();
  const aboutUs: any = await fetchAboutUsPage(localActive);
  return {
    title: aboutUs.seo.title || "About Us Page",
    description: aboutUs.seo.description || "",
    icons: {
      icon: "/images/logo.png",
    },
    openGraph: {
      title: aboutUs.seo.title || "",
      description: aboutUs.seo.description || "",
      url: aboutUs.seo.url || "",
      type: aboutUs.seo.type || "website",
      images: aboutUs.seo.image || "",
    },
  };
}
const page = async () => {
   const localActive = await getLocale();
  const data = await fetchAboutUsPage(localActive);
  return <AboutUsPage data={data} />;
};

export default page;
