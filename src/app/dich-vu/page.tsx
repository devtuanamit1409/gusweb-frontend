"use client";
import Banner from "@/components/Banner";
import React from "react";
import dynamic from "next/dynamic";
import Slide from "@/components/Slide";
import IdeaCard from "@/components/IdeaCard";
const DynamicSlide = dynamic(() => import("@/components/Slide"), {
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
    </div>
  );
};

export default page;
