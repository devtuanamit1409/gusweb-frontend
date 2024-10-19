import CardComponent from "@/components/CardComponent";
import Image from "next/image";

export default function WebsiteAsGateway({ webUs }: any) {
  //   console.log(webUs);
  return (
    <div className=" flex flex-col items-center">
      <div className="relative  w-full laptop:h-[931px] tablet:h-[1101px] mobile:h-[1666px]">
        <Image
          src={webUs.intro.url}
          alt={webUs.intro.alt}
          fill
          className="object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="absolute w-full h-full flex flex-col items-center text-center p-4">
        <div className="laptop:max-w-[736px] w-full gap-4 flex flex-col mt-11">
          <h1 className="tablet:text-[56px] mobile:text-[40px] text-white mobile:leading-[48px] font-semibold mobile:tracking-[0.2px] font-bricolage laptop:leading-[67.2px]">
            {webUs.intro.title}
          </h1>
          <div className="text-white text-[16px]  h-full laptop:leading-[24px] leading-[24px] tracking-[0.5px] font-bricolage">
            <h1>{webUs.intro.description}</h1>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 laptop:gap-6 mt-4 laptop:max-w-[1116px] tablet:max-w-[979px] mobile:max-w-[655px] mx-auto">
          {webUs.items &&
            webUs.items.slice(-6).map((item: any, index: number) => (
              <div
                key={index}
                className="flex justify-center laptop:w-[calc((100%-48px)/3)] w-full tablet:w-[calc((100%-16px)/2)]"

              >
                <CardComponent item={item} showDescriptionOnHover={true} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
