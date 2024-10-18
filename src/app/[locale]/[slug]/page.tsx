import BlogCard from "@/components/BlogCard";
import BookComponent from "@/components/BookComponent";
import TechnologyComponent from "@/components/TechnologyComponent";
import {
  fetchFilteredArticleDetail,
  fetchSubCategoryByCategoryId,
} from "@/utils/GlobalApi";

const Page = async ({ params }: { params: { slug: string } }) => {
  const data = await fetchFilteredArticleDetail("vi", params.slug);
  const subCateList = await fetchSubCategoryByCategoryId(
    "vi",
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
