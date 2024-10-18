import React from "react";
import Image from "next/image";

import InfoComponent from "@/components/InfoComponent";

import BannerComponent from "@/components/BannerComponent";
import Contact from "@/components/Contact";
import WorkAboutComponent from "@/components/WorkAboutComponent";
import ExpensiveComponent from "@/components/ExpensiveComponent";
import TeamComponent from "@/components/TeamComponent";
import TargetComponent from "@/app/[locale]/about-us/components/TargetComponent";
import LeaderComponent from "./LeaderComponent";

const AboutUsPage: React.FC<any> = ({ data }) => {
  // console.log(data);
  return (
    <div className="w-full h-full flex flex-col mobile:gap-10 tablet:gap-10 laptop:gap-0 ">
      <BannerComponent intro={data.intro} />
      <div className="flex flex-col relative mobile:gap-10 tablet:gap-10 laptop:gap-0">
        <div className="absolute top-20 right-24 w-[418px] h-[498px] hidden laptop:block">
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
      <LeaderComponent meet={data.meet} />
      <TeamComponent team={data.team} />
      <Contact />
    </div>
  );
};

export default AboutUsPage;
