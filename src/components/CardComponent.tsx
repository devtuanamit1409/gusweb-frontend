import React from "react";
import Image from "next/image";
import { CardModel } from "@/models/cardModel";

interface Props {
  item: CardModel;
  customClassName?: string;
  customClassNameTitle?: string;
  customClassNameDescription?: string;
  showDescriptionOnHover?: boolean;
  showDescription?: boolean;
  width?: number;
  height?: number;
  hideOnHover?: boolean;
}

const CardComponent = (props: Props) => {
  const {
    item,
    customClassName,
    showDescriptionOnHover = true,
    showDescription,
    customClassNameTitle,
    customClassNameDescription,
    width = 80,
    height = 80,
    hideOnHover = false,
  } = props;

  return (
    <div
      className={`group w-[356px] h-[250px] p-6 rounded-3xl gap-4 bg-white/25 border-white/25 border-2 backdrop-blur-[10px] flex flex-col items-center justify-center relative ${customClassName}`}
    >
      <Image
        src={item.url || ""}
        alt={item.alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${
          hideOnHover ? "group-hover:opacity-0" : "opacity-100"
        }`}
      />
      <p
        className={`${customClassNameTitle} transition-opacity duration-300 ${
          hideOnHover ? "group-hover:opacity-0" : "opacity-100"
        }`}
      >
        {item.title}
      </p>
      {showDescription && (
        <p className={` ${customClassNameDescription}`}>{item.description}</p>
      )}
      {showDescriptionOnHover && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl p-4">
          <p className="text-black text-center text-sm">{item.description}</p>
        </div>
      )}
    </div>
  );
};

export default CardComponent;
