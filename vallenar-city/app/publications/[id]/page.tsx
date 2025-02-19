import { fetchPublicationById } from "@/app/lib/data"; // Create this function in your data file
import Image from "next/image";
import { notFound } from "next/navigation";

interface PageProps {
  params: { id: string };
}

export default async function PublicationPage({ params }: PageProps) {
  const { id } = await params;

  if (!id) {
    console.error("Error: Missing publication ID in params");
    return notFound();
  }

  const publication = await fetchPublicationById(id);

  if (!publication) {
    return notFound();
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold mt-4">{publication.title}</h2>
      <Image
        className="w-full rounded-md"
        src={`/img/${publication.image}`}
        alt={publication.title}
        width={500}
        height={300}
      />

      <p className="text-gray-700 mt-2">{publication.description}</p>
      <p>{publication.price}</p>
      <p>{publication.type}</p>
      <p>
        {publication.address} {publication.addressNumber}
      </p>
      <div>
        <p>{publication.image01}</p>
        <p>{publication.image02}</p>
        <p>{publication.image03}</p>
      </div>
    </div>
  );
}
