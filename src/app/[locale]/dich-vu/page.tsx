import Banner from "@/components/Banner";
import React from "react";
import IdeaCard from "@/components/IdeaCard";
import SupportIdeas from "@/components/SupportIdeas";
import DevelopmentSolutions from "@/components/DevelopmentSolutions";
import Contact from "@/components/Contact";
import Head from "next/head";
import Slogan from "@/components/Slogan";
import CustomerVip from "@/components/CustomerVip";
import { fetchServicePage } from "@/utils/GlobalApi";

const page = async () => {
  const data = await fetchServicePage("vi");

  return (
    <div className="w-full h-full">
      <Banner intro={data.intro} brands={data.brands} />
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
