import AboutUs from "@/components/AboutUs";
import BlogCard from "@/components/BlogCard";
import BrandValue from "@/components/BrandValue";
import Contact from "@/components/Contact";
import CustomerSuccessStory from "@/components/CustomerSuccessStory";
import OurExperts from "@/components/OurExperts";
import PartnerList from "@/components/PartnerList";
import WebsiteAsGateway from "@/components/WebsiteAsGateway";
import WhyChooseUs from "@/components/WhyChooseUs";
import WorkPrinciples from "@/components/WorkPrinciples";
import { fetchHomePage } from "@/utils/GlobalApi";

export default async function Home() {
  const data = await fetchHomePage("vi");

  return (
    <main className="">
      {/* <BrandValue mainData={data.main} />? */}
      {/* <AboutUs whoUs={data.whoUs} />R */}
      {/* <WebsiteAsGateway webUs={data.webUs} />C */}
      {/* <OurExperts about={data.about} />R */}
      {/* <WhyChooseUs whyUs={data.whyUs} />R */}
      {/* <WorkPrinciples work={data.work} project={data.project} />? */}
      <PartnerList customer={data.customer} />
      {/* <CustomerSuccessStory chats={data.chats} />? */}
      {/* <BlogCard /> */}
      {/* <Contact /> */}
    </main>
  );
}
