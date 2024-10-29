import AboutUsPage from "@/components/AboutUsPage";
import { routing } from "@/i18n/routing";
import { fetchAboutUsPage } from "@/utils/GlobalApi";
import { Metadata } from "next";
import { getLocale, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
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

interface HomeProps {
  params: { locale: "en" | "vi" | "ko" };
}

const page = async ({ params: { locale } }: HomeProps) => {
  // setRequestLocale(locale);
  // const localActive = await getLocale();
  const data = await fetchAboutUsPage(locale || "vi");
  return <AboutUsPage data={data} />;
};

export default page;
