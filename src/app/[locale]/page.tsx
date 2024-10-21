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
import { getLocale } from "next-intl/server";

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
