import AboutUs from "@/components/AboutUs";
import BrandValue from "@/components/BrandValue";
import Contact from "@/components/Contact";
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
      <Contact />
    </div>
  );
}
