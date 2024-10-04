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
      <Banner />
      <Slogan />
      <IdeaCard />
      <SupportIdeas />
      <CustomerVip />
      <DevelopmentSolutions />
      <Contact />
    </div>
  );
};

export default page;
