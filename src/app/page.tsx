import About from "@/components/About";
import Client from "@/components/PartnerList";
import Contact from "@/components/Contact";
import DesignGusweb from "@/components/DesignGusweb";
import GUSWEB from "@/components/GUSWEB";
import Inflation from "@/components/Inflation";
import Principle from "@/components/Principle";
import WebsiteCard from "@/components/WebsiteCard";

export default function Home() {
  return (
    <div className="">
      <Inflation />
      <GUSWEB />
      <WebsiteCard />
      <About />
      <DesignGusweb />
      <Principle />
      <Client />
      <Contact />
    </div>
  );
}
