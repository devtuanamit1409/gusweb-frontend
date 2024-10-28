import BlogComponent from "@/components/BlogComponent";
import { setRequestLocale } from "next-intl/server";
import React from "react";

interface PageProps {
  params: {
    locale: "en" | "vi" | "ko";
  };
}

const Page = ({ params: { locale } }: PageProps) => {
  setRequestLocale(locale);
  return (
    <>
      <BlogComponent />
    </>
  );
};

export default Page;
