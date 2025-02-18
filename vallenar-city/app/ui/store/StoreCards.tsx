"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { StoreCardProps } from "../../lib/definitions";

const StoreCards: React.FC<StoreCardProps> = ({
  title,
  description,
  image,
  id,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/stores/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col my-8 mx-3 border-1  p-4 rounded-lg shadow-xl shadow-gray-400 bg-white w-64 hover:scale-110 transition cursor-pointer"
    >
      <img
        src={`/img/${image}`}
        width={200}
        height={200}
        alt={`${title} Logo`}
        className="w-full h-full object-contain rounded-md"
      />
      <h2 className="text-lg font-bold mt-2">{title}</h2>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
  );
};

export default StoreCards;
