import AboutUsPage from "@/components/AboutUsPage";
import { fetchAboutUsPage } from "@/utils/GlobalApi";
import React from "react";

const page = async () => {
  const data = await fetchAboutUsPage("vi");
  return <AboutUsPage data={data} />;
};

export default page;
