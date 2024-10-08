import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import InfoComponent from "@/components/InfoComponent";

import BannerComponent from "@/components/BannerComponent";
import Contact from "@/components/Contact";
import WorkAboutComponent from "@/components/WorkAboutComponent";
import ExpensiveComponent from "@/components/ExpensiveComponent";
import TeamComponent from "@/components/TeamComponent";
import TargetComponent from "@/app/[locale]/about-us/components/TargetComponent";

const AboutUsPage: React.FC<any> = ({ data }) => {
  return (
    <div className="w-full h-full">
      <BannerComponent intro={data.intro} />
      <div className="custom-container relative">
        <div className="absolute top-20 right-24 w-[418px] h-[498px]">
          <Image
            src="/images/Framea.png"
            alt=""
            width={418}
            height={498}
            className="object-cover"
          />
        </div>

        <InfoComponent data={data.about} />

        <TargetComponent taget={data.taget} />

        <WorkAboutComponent work={data.work} />
      </div>
      <ExpensiveComponent exp={data.exp} />

      {/* <TeamComponent team={data.team} /> */}
      <Contact />
    </div>
  );
};

export default AboutUsPage;
