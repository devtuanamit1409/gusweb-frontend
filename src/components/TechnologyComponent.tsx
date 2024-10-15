import React from "react";
import Image from "next/image";
import BlogCardComponent from "./BlogCardComponent";
import BlogCard from "./BlogCard";
const TechnologyComponent: React.FC<any> = ({ subCates, article }) => {
  // console.log(article);

  return (
    <div className="flex flex-col justify-center gap-10">
      <div className="h-[506px] relative justify-center items-center flex">
        <Image
          src={article.sub_category.url}
          alt={article.sub_category.alt}
          fill
          className="absolute top-0 left-0 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b55a5] to-[#00d2ff] opacity-70 z-0"></div>
        <div className="laptop:max-w-[1440px] tablet:max-w-[744px] mobile:max-w-[360px] h-[506px] py-20 px-[162px] mobile:px-4 z-10 w-full flex justify-center items-center ">
          <div className="laptop:max-w-[1116px] laptop:h-[346px] tablet:max-w-[557px] tablet:h-[129px] mobile:max-w-[328px] mobile:h-[234px] text-[#FEFEFE] justify-center laptop:items-start tablet:items-center mobile:items-center tablet:gap-6 laptop:gap-2 flex flex-col  w-full">
            <h5 className="font-normal text-[24px] leading-[38.4px] font-bricolage line-clamp-1 mobile:h-[76px] relative text-preamble  mobile:line-clamp-2 z-30">
              #{article.sub_category.title}
            </h5>
            <h2 className="font-bold text-[56px] leading-[67.2px]  font-bricolage laptop:line-clamp-2 tablet:line-clamp-1 mobile:h-[134px] mobile:line-clamp-2">
              {article.title}
            </h2>
          </div>
        </div>
      </div>
      <div className="custom-container laptop:py-20 laptop:px-[162px] flex flex-row gap-6">
        <div
          className="laptop:max-w-[831px] tablet:max-w-[500px] mobile:max-w-[328px] w-full"
          dangerouslySetInnerHTML={{
            __html: article.typeOrder.detail,
          }}
        />

        <div className="max-w-[261px] w-full h-full flex-col gap-4 p-4 rounded-[16px]  category-item__box hidden laptop:block">
          <h6 className="!font-semibold text-[20px] leading-[24.2px] font-bricolage uppercase">
            Danh mục bài viết
          </h6>

          <div className="max-w-[220px]  flex flex-col gap-2 w-full">
            {subCates &&
              subCates?.map((item: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="max-w-[220px] h-[22px] flex flex-row gap-2 rounded-[1px] w-full"
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
