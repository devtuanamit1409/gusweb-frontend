import AboutUs from "@/components/AboutUs";
import BlogCard from "@/components/BlogCard";
import BrandValue from "@/components/BrandValue";
import Contact from "@/components/Contact";
import CustomerSuccessStory from "@/components/CustomerSuccessStory";
import OurExperts from "@/components/OurExperts";
import PartnerList from "@/components/PartnerList";
import ProjectShowcase from "@/components/ProjectShowcase";
import WebsiteAsGateway from "@/components/WebsiteAsGateway";
import WhyChooseUs from "@/components/WhyChooseUs";
import WorkPrinciples from "@/components/WorkPrinciples";
import { routing } from "@/i18n/routing";
import { fetchHomePage } from "@/utils/GlobalApi";
import { Metadata } from "next";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

interface Params {
  params: {
    locale: "en" | "vi" | "ko";
  };
}

export async function generateMetadata({
  params: { locale },
}: Params): Promise<Metadata | undefined> {
  if (!routing.locales.includes(locale)) {
    notFound();
  }
  const homePage = await fetchHomePage(locale);

  return {
    title: homePage?.seo?.title || "Home Page",
    description: homePage?.seo?.description || "",
    icons: { icon: "/images/logo.png" },
    openGraph: {
      title: homePage?.seo?.title || "",
      description: homePage?.seo?.description || "",
      url: homePage?.seo?.url || "",
      type: homePage?.seo?.type || "website",
      images: homePage?.seo?.image || "",
    },
  };
}

interface HomeProps {
  params: { locale: "en" | "vi" | "ko" };
}

export default async function Home({ params: { locale } }: HomeProps) {
  const data = await fetchHomePage(locale);
  return (
    <>
      <BrandValue mainData={data.main} />
      <AboutUs whoUs={data.whoUs} />
      <WebsiteAsGateway webUs={data.webUs} />
      <OurExperts about={data.about} />
      <WhyChooseUs whyUs={data.whyUs} />
      <WorkPrinciples work={data.work} />
      <ProjectShowcase project={data.project} />
      <PartnerList customer={data.customer} />
      <CustomerSuccessStory chats={data.chats} />
      <BlogCard />
      <Contact />
    </>
  );
}
