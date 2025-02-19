"use client";

import { useState } from "react";
import Image from "next/image";

interface PublicationProps {
  publication: {
    title: string;
    image: string;
    image_01?: string;
    image_02?: string;
    image_03?: string;
  };
}

export default function PublicationGallery({ publication }: PublicationProps) {
  // Ensure selectedImage is always a string
  const [selectedImage, setSelectedImage] = useState<string>(
    publication.image || ""
  );

  return (
    <div className="md:grid md:grid-cols-3 md:grid-rows-3 md:gap-4">
      {/* Image Selector */}
      <div className="flex flex-wrap justify-center gap-2 my-2 md:row-span-3 lg:flex-row md:my-0 md:place-self-center transition">
        {[
          publication.image,
          publication.image_01,
          publication.image_02,
          publication.image_03,
        ]
          .filter((img): img is string => Boolean(img)) // Ensures no undefined values
          .map((img, index) => (
            <Image
              key={index}
              className={`cursor-pointer border-4 md:w-[150px] lg:w-[200] ${
                selectedImage === img
                  ? "border-[var(--color-04)]"
                  : "border-transparent"
              }`}
              alt={`${publication.title} imagen ${index + 1}`}
              src={`/img/${img}`}
              width={100}
              height={100}
              onClick={() => setSelectedImage(img)}
            />
          ))}
      </div>
      {/* Main Image */}
      <Image
        className="w-full place-self-center rounded-md max-w-[600px] md:col-span-2 md:row-span-3"
        src={`/img/${selectedImage}`}
        alt={publication.title}
        width={500}
        height={300}
      />
    </div>
  );
}
