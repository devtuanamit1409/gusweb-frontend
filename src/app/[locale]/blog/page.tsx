import BlogComponent from "@/components/BlogComponent";
import { setRequestLocale } from "next-intl/server";
import React, { Suspense } from "react";

interface PageProps {
  params: {
    locale: "en" | "vi" | "ko";
  };
}

const Page = async ({ params: { locale } }: PageProps) => {
  setRequestLocale(locale);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogComponent />
    </Suspense>
  );
};

export default Page;
