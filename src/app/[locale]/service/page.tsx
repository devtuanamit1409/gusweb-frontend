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

const page = async () => {
  const data = await fetchServicePage("vi");
console.log(data);
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
