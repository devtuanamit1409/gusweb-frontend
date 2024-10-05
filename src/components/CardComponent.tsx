import React from "react";
import Image from "next/image";
import { CardModel } from "@/models/cardModel";

interface Props {
  item: CardModel;
  showDescriptionOnHover?: boolean;
}

const CardComponent = (props: Props) => {
  const {
    item,
    showDescriptionOnHover = true,
  } = props;

  return (
    <div className={`group w-[356px] h-[250px] p-6 rounded-3xl gap-4 bg-white/25 border-white/25 border-2 backdrop-blur-[10px] flex flex-col items-center justify-center relative`}>
      <Image
        src={item.url || ""}
        alt='Image not available'
        width={80}
        height={80}
        className='transition-opacity duration-300 group-hover:opacity-0'
      />
      <p className='transition-opacity duration-300 group-hover:opacity-0 text-white'>
        {item.title}
      </p>
      {showDescriptionOnHover && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl p-4">
          <p className="text-center text-sm text-white">
            {item.description}
          </p>
        </div>
      )}
    </div>
  )
}


export default CardComponent;
