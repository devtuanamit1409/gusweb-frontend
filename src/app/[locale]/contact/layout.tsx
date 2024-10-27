import { fetchBlogPage, fetchContactUsPage } from "@/utils/GlobalApi";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: any): Promise<Metadata | undefined> {
  const localActive = await getLocale();
  const contactPage = await fetchContactUsPage(localActive);
  // console.log(contactPage);
  return {
    title: contactPage.seo.title || "Contact Page",
    description: contactPage.seo.description || "",
    icons: {
      icon: "/images/logo.png",
    },
    openGraph: {
      title: contactPage.seo.title || "",
      description: contactPage.seo.description || "",
      url: contactPage.seo.url || "",
      type: contactPage.seo.type || "website",
      images: contactPage.seo.image || "",
    },
  };
}
export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
