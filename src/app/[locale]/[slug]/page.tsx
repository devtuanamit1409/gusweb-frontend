import BlogCard from "@/components/BlogCard";
import BookComponent from "@/components/BookComponent";
import TechnologyComponent from "@/components/TechnologyComponent";

const article = {
  type: "ebook",
};

const Page = () => {
  return (
    <div>
      {article.type === "ebook" ? <BookComponent /> : <TechnologyComponent />}
      <BlogCard />
    </div>
  );
};

export default Page;
