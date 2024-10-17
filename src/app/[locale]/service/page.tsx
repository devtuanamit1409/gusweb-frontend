import React from "react";
import IdeaCard from "@/components/IdeaCard";
import SupportIdeas from "@/components/SupportIdeas";
import DevelopmentSolutions from "@/components/DevelopmentSolutions";
import Contact from "@/components/Contact";
import Head from "next/head";
import Slogan from "@/components/Slogan";
import CustomerVip from "@/components/CustomerVip";
import { fetchServicePage } from "@/utils/GlobalApi";
import BannerComponent from "@/components/BannerComponent";
import { Slide } from "@mui/material";
import SlideComponent from "@/components/SlideComponent";

const page = async () => {
  const data = await fetchServicePage("vi");
console.log(data);
  return (
    <div className="">
      {/* <BannerComponent intro={data.intro} brands={data.brands} /> */}
      <div className="custom-container laptop:px-[162px]  px-4">
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
