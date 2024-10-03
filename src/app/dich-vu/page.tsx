"use client";
import Banner from "@/components/Banner";
import React from "react";
import Slide from "@/components/SlideComponent";
import IdeaCard from "@/components/IdeaCard";
import SupportIdeas from "@/components/SupportIdeas";
import dynamic from "next/dynamic";
const DynamicSlide = dynamic(() => import("@/components/SlideComponent"), {
  ssr: false, // Không render trên server
});
const page = () => {
  return (
    <div className="">
      <Banner />
      <Slide />
      <p>tap trung vao nguoi dung </p>
      <p>tao dung san pham</p>

      <IdeaCard />
      <SupportIdeas />
    </div>
  );
};

export default page;
