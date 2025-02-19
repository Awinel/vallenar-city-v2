import { Store } from "@/app/lib/definitions";
import Image from "next/image";
import Link from "next/link";

export default function CardsClient({ id, name, image }: Store) {
  return (
    <Link href={`/stores/${id}`} passHref>
      <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white p-4 m-5 hover:scale-110 transition cursor-pointer max-h-[400px]">
        <Image
          className="w-full rounded-md"
          src={`/img/${image}`}
          alt={name}
          width={300}
          height={200}
        />
        <div className="px-4 py-2">
          <h2 className="text-xl font-bold mb-2">{name}</h2>
        </div>
      </div>
    </Link>
  );
}
