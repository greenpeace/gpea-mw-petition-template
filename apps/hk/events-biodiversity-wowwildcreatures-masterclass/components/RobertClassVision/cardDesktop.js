import React from "react";
import { Box } from "@chakra-ui/react";

const Card = ({ image, title, content }) => {
  return (
    <div className="relative flex-1" key={title}>
      <div className="absolute left-6 right-6 -bottom-[60px] z-30 max-w-[80%]">
        <p className="mb-4 border-b-2 pb-4 text-[20px] font-bold text-[#FFF]">
          {title}
        </p>
        <p className="mt-4 min-h-[120px] text-[#FFF]">{content}</p>
      </div>
      <div className="relative mx-auto h-[420px] w-[80%] overflow-hidden rounded-[20px]">
        <Box
          backgroundImage={image}
          backgroundRepeat="no-repeat"
          backgroundSize={"cover"}
          pos={"absolute"}
          top={0}
          bottom={0}
          w={"full"}
        >
          <Box
            bgGradient="linear(to-b, transparent 0%, transparent 50%, black 100%)"
            h={"full"}
          />
        </Box>
      </div>
    </div>
  );
};

export default Card;
