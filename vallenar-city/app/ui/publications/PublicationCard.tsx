import { Publication } from "@/app/lib/definitions";
import Image from "next/image";
import Link from "next/link";

export default function CardsClient({
  id,
  title,
  description,
  image,
  price,
}: Publication) {
  return (
    <Link href={`/publications/${id}`} passHref>
      <div className="max-w-full  md:max-h-[300px] rounded-lg shadow-lg bg-white p-4 m-5 hover:scale-105 transition cursor-pointer">
        <Image
          className="rounded-md"
          src={`/img/${image}`}
          alt={`${title} image`}
          width={300}
          height={100}
        />
        <h2 className="text-xl font-bold mb-2 text-black">{title}</h2>
        <p className="text-gray-700 text-sm">{description}</p>
        <p>{price}</p>
      </div>
    </Link>
  );
}
