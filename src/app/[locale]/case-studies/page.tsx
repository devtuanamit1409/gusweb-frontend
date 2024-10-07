import CaseStudies from "@/components/CaseStudiesConponent";
import { fetchArticle, fetchCaseStudies } from "@/utils/GlobalApi";
import React from "react";

const page = async () => {
  const data = await fetchCaseStudies("vi");
  return <CaseStudies data={data} />;
};

export default page;
