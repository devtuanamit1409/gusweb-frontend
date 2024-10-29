import React from "react";
import IdeaCard from "@/components/IdeaCard";
import SupportIdeas from "@/components/SupportIdeas";
import DevelopmentSolutions from "@/components/DevelopmentSolutions";
import Contact from "@/components/Contact";
import Head from "next/head";
import Slogan from "@/components/Slogan";
import CustomerVip from "@/components/CustomerVip";
import { fetchServicePage } from "@/utils/GlobalApi";
import { Slide } from "@mui/material";
import SlideComponent from "@/components/SlideComponent";
import BannerComponent from "@/components/BannerComponent";
import { Metadata } from "next";
import { getLocale, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
export async function generateMetadata(): Promise<Metadata | undefined> {
  const localActive = await getLocale();
  const service: any = await fetchServicePage(localActive);

  return {
    title: service.seo.title || "Service Page",
    description: service.seo.description || "",
    icons: {
      icon: "/images/logo.png",
    },
    openGraph: {
      title: service.seo.title || "",
      description: service.seo.description || "",
      url: service.seo.url || "",
      type: service.seo.type || "website",
      images: service.seo.image || "",
    },
  };
}

interface HomeProps {
  params: { locale: "en" | "vi" | "ko" };
}

const page = async ({ params: { locale } }: HomeProps) => {
  setRequestLocale(locale);
  const localActive = await getLocale();
  const data = await fetchServicePage(localActive);
  return (
    <div className="flex flex-col laptop:gap-0 gap-10">
      <BannerComponent intro={data.intro} brands={data.brands} />
      <div className=" laptop:py-20   px-4">
        <SlideComponent brands={data.brands} />
      </div>
      <Slogan slogans={data.slogans} />
      <IdeaCard solution={data.solution} />
      <SupportIdeas help={data.help} />
      <CustomerVip customerVips={data.customerVips} />
      <DevelopmentSolutions whyUs={data.whyUs} />
      <Contact />
    </div>
  );
};

export default page;
