import { fetchStoreById } from "@/app/lib/data"; // Create this function in your data file
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: { id: string };
}

export default async function StorePage({ params }: PageProps) {
  // const store = await fetchStoreById(params.id);
  const { id } = await params;

  if (!id) {
    console.error("Error: Missing store ID in params");
    return notFound();
  }

  const store = await fetchStoreById(id);

  if (!store) {
    return notFound();
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold mt-4">{store.name}</h2>
      <Image
        className="w-full rounded-md max-w-[300px]"
        src={`/img/${store.image}`}
        alt={store.name}
        width={500}
        height={500}
      />

      <p className="text-gray-700 mt-2">{store.description}</p>
      <p>
        {store.address} {store.addressnumber}
      </p>
      <div>
        <h3>Contacto:</h3>
        <p>{store.phone}</p>
        <Link href={`https://www.instagram.com/${store.instagram}`}>
          <p>{store.instagram}</p>
        </Link>
        <Link href={`https://www.instagram.com/${store.facebook}`}>
          <p>{store.facebook}</p>
        </Link>
      </div>
      <p>{store.email}</p>
      <p>{store.facebook}</p>
    </div>
  );
}
