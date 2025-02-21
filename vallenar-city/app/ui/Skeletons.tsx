"use client";

import Image from "next/image";

function CircularProgress() {
  return (
    <div className="flex justify-center content-center h-[500px]">
      <Image
        className="animate-spin"
        alt="Loading image"
        src={`/loading.svg`}
        width={100}
        height={100}
      ></Image>
    </div>
  );
}

export default CircularProgress;
