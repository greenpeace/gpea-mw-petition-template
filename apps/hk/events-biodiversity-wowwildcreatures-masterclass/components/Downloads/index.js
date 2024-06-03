import React from "react";
import { Box, AspectRatio } from "@chakra-ui/react";
import NextImage from "next/image";
const Downloads = () => {
  const DownloadList = [
    {
      id: 1,
      name: "7 Steps Photography Checklist（只有英文版）",
      src: "/robert-class/list/04a_map.png",
      url: "https://drive.google.com/file/d/1dLdvNRL4lQOWqbiWKYDN4Qd3s3z3y31P/view?pli=1",
    },
    {
      id: 2,
      name: "本地生態探索地圖（中文版）",
      src: "/robert-class/list/04a_map.png",
      url: "https://drive.google.com/file/d/1bGADVNyRUYnPNII6iArmz_XG3fvaqo4F/view",
    },
    {
      id: 3,
      name: "Hong Kong Nature Photo Walk Map(English version)",
      src: "/robert-class/list/04a_map.png",
      url: "https://drive.google.com/file/d/1YejDF2rUgGNJdTgRjMdZhNMzmOEbwV4k/view",
    },
    {
      id: 4,
      name: "《香港怪の生物》本地生態觀賞圖鑑",
      src: "/robert-class/list/04a_map.png",
      url: "https://drive.google.com/file/d/1p1xaEMRu3gL9RjWhzFoljoyO6QBVOdzj/view",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4 items-center mx-auto">
        <NextImage
          alt={"ep-robert"}
          src={"/robert-class/ep-robert.webp"}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          className="-scale-y-100 -rotate-180 md:hidden max-w-[96px]"
        />
        <h1 className="text-2xl md:text-3xl text-[#007c00] font-bold text-center">
          資源下載
        </h1>
      </div>

      <div className="relative overflow-x-auto mx-auto w-full">
        <div className="flex flex-row gap-4 items-baseline">
          <div className="max-w-[240px] hidden md:block">
            <NextImage
              alt={"ep-robert"}
              src={"/robert-class/ep-robert.webp"}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="-scale-y-100 -rotate-180"
            />
          </div>
          <div className="flex-1">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              {DownloadList.map((item) => (
                <Box
                  key={item.id}
                  borderRadius="xl"
                  onClick={() => window.open(item.url, "_blank")}
                  cursor="pointer"
                  _hover={{ opacity: 0.7 }}
                  m={4}
                >
                  <AspectRatio w="full">
                    <NextImage
                      alt={item.name}
                      src={item.src}
                      layout="fill" // This ensures the image fills the container
                      objectFit="cover" // This makes sure the image covers the box fully
                      className="rounded-md"
                    />
                  </AspectRatio>
                  <div as="h3" className="text-center font-bold mt-2">{item.name}</div>
                </Box>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Downloads;
