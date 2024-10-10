import React from "react";
import Image from "next/image";
const TechnologyComponent: React.FC<any> = ({ subCates, article }) => {
  // console.log(article);

  const articleData = {
    content: article.typeOrder.detail,
  };
  return (
    <div className="flex flex-col justify-center">
      <div className="h-[448px] relative justify-center items-center flex">
        <Image
          src={article.sub_category.url}
          alt={article.sub_category.alt}
          fill
          style={{ objectFit: "cover" }}
          className="absolute top-0 left-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b55a5] to-[#00d2ff] opacity-70 z-0 "></div>
        <div className="w-[1440px] h-[506px] py-20 px-[162px] z-10 ">
          <div className="w-[1116px] h-[346px] text-[#FEFEFE] justify-center gap-2  flex flex-col">
            <h5 className="!font-normal text-[24px] font-bricolage ">
              #{article.sub_category.title}
            </h5>
            <h2 className="!font-bold text-[56px] leading-[67.2px] font-bricolage ">
              {article.title}
            </h2>
          </div>
        </div>
      </div>
      <div className="custom-container py-20 px-[162px] flex flex-row gap-6">
        <div
          className="w-[831px] flex flex-col"
          dangerouslySetInnerHTML={{
            __html: articleData.content,
          }}
        />

        <div className="w-[261px] h-full flex-col gap-4 p-4 rounded-[16px]  category-item__box">
          <h6 className="!font-semibold text-[20px] leading-[24.2px] font-bricolage uppercase">
            Danh mục bài viết
          </h6>

          <div className="w-[220px]  flex flex-col gap-2">
            {subCates &&
              subCates?.map((item: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="w-[220px] h-[22px] flex flex-row gap-2 rounded-[1px]"
                  >
                    <p className="font-medium text-4 leading-[22.4px]">
                      {item.title}
                    </p>
                    <p className="font-medium text-4 leading-[22.4px]">{`(${item.articleCount})`}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyComponent;
