import { Publication } from "@/app/lib/definitions";
import Image from "next/image";
import Link from "next/link";

export default function CardsClient({
  id,
  title,
  address,
  addressnumber,
  type,
  image,
  price,
}: Publication) {
  return (
    <Link href={`/publications/${id}`} passHref>
      <div className="md:grid md:grid-cols-3 max-w-full rounded-lg shadow-lg shadow-gray-400 bg-white p-4 mx-8 hover:scale-105 transition cursor-pointer">
        <Image
          className="rounded-md place-self-center md:col-start-1 md:row-span-3"
          src={`/img/${image}`}
          alt={`${title} image`}
          width={300}
          height={100}
        />
        <h2 className="text-xl font-bold mb-2 text-black text-center my-2 md:col-start-2 md:col-span-4">
          {title}
        </h2>
        <p className="col-start-2 text-lg col-span-4 row-start-2 md:justify-self-center md:mx-10 capitalize">
          {type}
        </p>
        <p className="md:col-start-2 md:row-start-3 md:col-span-4 md:justify-self-center">
          {address} {addressnumber}
        </p>
        <p className="text-right md:col-start-4 md:row-start-3 md:self-end">
          ${price}
        </p>
      </div>
    </Link>
  );
}
