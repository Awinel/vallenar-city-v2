import { Publication } from "@/app/lib/definitions";
import Image from "next/image";
import Link from "next/link";

export default function CardsClient({
  id,
  title,
  description,
  image,
}: Publication) {
  return (
    <Link href={`/publications/${id}`} passHref>
      <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white p-4 m-5 hover:scale-110 transition cursor-pointer">
        <Image
          className="w-full rounded-md"
          src={`/img/${image}`}
          alt={title}
          width={300}
          height={200}
        />
        <div className="px-4 py-2">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-700 text-sm">{description}</p>
        </div>
      </div>
    </Link>
  );
}
