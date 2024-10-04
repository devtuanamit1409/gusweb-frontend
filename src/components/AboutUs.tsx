"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import "aos/dist/aos.css";
import { bodyDesktopModel } from "@/models/bodyDesktopModel";

export default function AboutUs({ whoUs }: any) {
  // console.log(whoUs);
  return (
    <div className="flex items-center justify-center max-w-[1140px] mx-auto text-left">
      <React.Fragment>
        <div
          className="flex-1 p-4"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <Image src={whoUs.url} alt={whoUs.alt} width={546} height={546} />
        </div>
        <div className="flex-1">
          <span
            className="text-2xl relative text-preamble"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <b className="font-bold uppercase ">GUSWEB </b>
            <span className="normal-case">LÀ AI?</span>
          </span>

          <h3 className=" font-bold text-[56px] font-bricolage">
            {whoUs.title}
          </h3>
          <p>{whoUs.description}</p>
        </div>
      </React.Fragment>
    </div>
  );
}
