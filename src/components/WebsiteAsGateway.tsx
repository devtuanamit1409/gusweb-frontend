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
        <h1 className="tablet:text-[56px] mobile:text-[40px] text-white laptop:max-w-[736px] tablet:max-w-[712px] mobile:max-w-[328px]  h-[134px]">
          {webUs.intro.title}
        </h1>
        <div className="text-white text-[16px] laptop:w-[680px] tablet:max-w-[712px] mobile:max-w-[328px] h-[48px] mt-10">
          <h1>{webUs.intro.description}</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-4 laptop:max-w-[1140px] tablet:max-w-[979px] mobile:max-w-[655px] mx-auto p-4">
          {webUs.items &&
            webUs.items.slice(-6).map((item: any, index: number) => (
              <div
                key={index}
                className="flex-1 min-w-[300px] max-w-[200px] flex justify-center"
              >
                <CardComponent item={item} showDescriptionOnHover={true} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
