import React from "react";
import { Box } from "@chakra-ui/react";
import Card from "./card";
import CardDesktop from "./cardDesktop";

import gpWork01 from "../../images/robert-class/gp-work/gp-work-01-s.png";
import gpWork02 from "../../images/robert-class/gp-work/gp-work-02-s.png";
import gpWork03 from "../../images/robert-class/gp-work/gp-work-03-s.png";

import ValueBg2x from "../../images/hd/ValueBg2X.jpg";

const CARDS = [
  {
    image: gpWork01,
    title: "守護香港自然環境",
    content:
      "自然住屋不對立，才是宜居城市發展之道。我們聯同民間專家發表近 20 份調查報告，以紮實理據倡議優先發展棕地，保護郊野公園、東大嶼水域及后海灣濕地免受破壞，守護珍貴棲息地。",
  },
  {
    image: gpWork02,
    title: "保育森林與海洋",
    content:
      "綠色和平前線調查團隊阻止企業以非法砍伐、深海採礦等破壞方式掠奪自然資源，足跡遍佈亞馬遜森林、印尼雨林、南北兩極，保育美洲豹、紅毛猩猩、企鵝、北極熊等易危及瀕危物種。",
  },
  {
    image: gpWork03,
    title: "落實生物多樣性公約",
    content:
      "去屆聯合國生物多樣性大會，綠色和平政策倡議團隊成功推動《昆明-蒙特利爾生物多樣性框架》通過，奠定 2030 年前保護 30% 陸地及海洋的目標，下一步將監督各地政府制訂行動計劃。",
  },
];

const VisionGroup = () => {
  return (
    <Box
      backgroundImage={ValueBg2x}
      backgroundPosition={"bottom center"}
      backgroundRepeat="no-repeat"
      backgroundSize={"100%"}
    >
      <div className="container mx-auto pt-[60px] pb-[160px] md:pb-[220px] md:pt-[120px] lg:pt-[160px]">

        <div className="lg:hidden">
          <div className="hide-scroll-bar flex overflow-x-scroll px-6 pb-10">
            <div className="flex flex-nowrap">
              {CARDS.map((d) => (
                <Card
                  key={d.title}
                  title={d.title}
                  content={d.content}
                  image={d.image}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto hidden lg:block lg:max-w-[1380px]">
          <div className="flex flex-row">
            {CARDS.map((d) => (
              <CardDesktop
                key={d.title}
                title={d.title}
                content={d.content}
                image={d.image}
              />
            ))}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default VisionGroup;
