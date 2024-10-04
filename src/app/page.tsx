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


export default function Home() {
  return (
    <div className="">
      <BrandValue />
      <AboutUs />
      <WebsiteAsGateway />
      <OurExperts />
      <WhyChooseUs />
      <WorkPrinciples />
      <PartnerList />
      <CustomerSuccessStory />
      <BlogCard />
      <Contact />
    </div>
  );
}
