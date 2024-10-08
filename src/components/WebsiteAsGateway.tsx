import CardComponent from "@/components/CardComponent";
import ImgBody from "@/components/ImgBody";
import { CardModel } from "@/models/cardModel";
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
        <div className="grid grid-cols-3 gap-6 justify-items-center mt-4">
          {webUs.items &&
            webUs.items.map((item: any, index: number) => (
              <CardComponent
                key={index}
                item={item}
                showDescriptionOnHover={true}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
