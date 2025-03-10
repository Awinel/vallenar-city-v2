import { fetchFoodById } from "@/app/lib/data"; // Create this function in your data file
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: { id: string };
}

export default async function FoodPage({ params }: PageProps) {
  const { id } = await params;

  if (!id) {
    console.error("Error: Missing food ID in params");
    return notFound();
  }

  const food = await fetchFoodById(id);

  if (!food) {
    return notFound();
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold mt-4">{food.name}</h2>
      <Image
        className="w-full rounded-md max-w-[300px]"
        src={`/img/${food.image}`}
        alt={food.name}
        width={500}
        height={300}
      />

      <p className="text-gray-700 mt-2">{food.description}</p>
      <p>
        {food.address} {food.addressnumber}
      </p>
      <div>
        <h3>Contacto:</h3>
        <p>{food.phone}</p>
        <Link href={`https://www.instagram.com/${food.instagram}`}>
          <p>{food.instagram}</p>
        </Link>
        <Link href={`https://www.instagram.com/${food.facebook}`}>
          <p>{food.facebook}</p>
        </Link>
      </div>
      <p>{food.email}</p>
      <p>{food.facebook}</p>
    </div>
  );
}
