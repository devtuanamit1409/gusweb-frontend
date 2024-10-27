import { fetchBlogPage } from "@/utils/GlobalApi";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: any): Promise<Metadata | undefined> {
  const localActive = await getLocale();
  const data = await fetchBlogPage(localActive);
  // console.log("data", data);

  return {
    title: data.seo.title || "Blog Page",
    description: data.seo.description || "",
    icons: {
      icon: "/images/logo.png",
    },
    openGraph: {
      title: data.seo.title || "",
      description: data.seo.description || "",
      url: data.seo.url || "",
      type: data.seo.type || "website",
      images: data.seo.image || "",
    },
  };
}
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
