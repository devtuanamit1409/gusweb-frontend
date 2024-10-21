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
import { fetchHomePage } from "@/utils/GlobalApi";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";
export async function generateMetadata(): Promise<Metadata | undefined> {
  const localActive = await getLocale();
  const homePage: any = await fetchHomePage(localActive);

  return {
    title: homePage.seo.title || "Home Page",
    description: homePage.seo.description || "",
    icons: {
      icon: "/images/logo.png",
    },
    openGraph: {
      title: homePage.seo.title || "",
      description: homePage.seo.description || "",
      url: homePage.seo.url || "",
      type: homePage.seo.type || "website",
      images: homePage.seo.image || "",
    },
  };
}
export default async function Home() {
  const localActive = await getLocale();
  const data = await fetchHomePage(localActive);

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
