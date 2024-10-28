import BlogCard from "@/components/BlogCard";
import BookComponent from "@/components/BookComponent";
import TechnologyComponent from "@/components/TechnologyComponent";
import {
  fetchFilteredArticleDetail,
  fetchSubCategoryByCategoryId,
} from "@/utils/GlobalApi";
import { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { notFound } from "next/navigation";
export async function generateMetadata({
  params,
}: any): Promise<Metadata | undefined> {
  const localActive = await getLocale();
  const articleData: any = await fetchFilteredArticleDetail(localActive, params.slug);

  return {
    title: articleData.articles[0].seo.title || "article",
    description: articleData.articles[0].seo.description || "",
    icons: {
      icon: "/images/logo.png",
    },
    openGraph: {
      title: articleData.articles[0].seo.title || "",
      description: articleData.articles[0].seo.description || "",
      url: articleData.articles[0].seo.url || "",
      type: articleData.articles[0].seo.type || "website",
      images: articleData.articles[0].seo.images
        ? [
            {
              url: articleData.articles[0].seo.images.url || "",
              width: 800,
              height: 600,
              alt: articleData.articles[0].seo.images.alt || "",
            },
          ]
        : [], // If no image, return an empty array
    },
  };
}
const Page = async ({ params }: { params: { slug: string } }) => {
  const localActive = await getLocale();
  const data = await fetchFilteredArticleDetail(localActive, params.slug);
  if (!data.articles || data.articles.length === 0) {
    notFound();
  }
  const subCateList = await fetchSubCategoryByCategoryId(
    localActive,
    data.articles[0].categoryId
  );
  return (
    <div className="w-full flex flex-col gap-4 laptop:gap-0">
      {data.articles[0].sub_category.title.toLowerCase() === "ebook" ? (
        <BookComponent article={data.articles[0]} />
      ) : (
        <TechnologyComponent
          subCates={subCateList.subCategories}
          article={data.articles[0]}
        />
      )}
      <BlogCard />
    </div>
  );
};

export default Page;
