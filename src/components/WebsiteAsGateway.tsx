import CardComponent from "@/components/CardComponent";
import Image from "next/image";

export default function WebsiteAsGateway({ webUs }: any) {
  //   console.log(webUs);

  return (
    <div className="relative flex flex-col items-center">
      <div className="relative  w-full h-[931px] ">
        <Image
          src={webUs.intro.url}
          alt={webUs.intro.alt}
          fill
          className="object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center">
        <h1 className="text-[56px] text-white w-[736px] h-[134px]">
          {webUs.intro.title}
        </h1>
        <div className="text-white text-[16px] w-[680px] h-[48px] mt-10">
          <h1>{webUs.intro.description}</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-4 max-w-[1116px] mx-auto">
          {webUs.items &&
            webUs.items.slice(-6).map((item: any, index: number) => (
              <div
                key={index}
                className="flex-1 min-w-[300px] max-w-[33%] flex justify-center"
              >
                <CardComponent item={item} showDescriptionOnHover={true} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
