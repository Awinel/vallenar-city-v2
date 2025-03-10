import { fetchPublicationById } from "@/app/lib/data"; // Create this function in your data file
import PublicationGallery from "@/app/ui/publications/PublicationGallery";
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
    <div className="md:grid md:grid-cols-4 grid-rows-[minmax(50px,100px)_auto] md:gap-4 flex flex-col justify-center my-8 mx-5 rounded-md shadow-lg shadow-gray-400 p-4">
      <h2 className="md:col-span-4 md:place-self-center text-3xl md:text-4xl font-bold m-4 text-center text-[var(--color-03)]">
        {publication.title}
      </h2>

      <div className="md:col-span-4 md:row-span-3 md:row-start-2">
        <PublicationGallery
          publication={{
            title: publication.title,
            image: publication.image,
            image_01: publication.image_01 || undefined,
            image_02: publication.image_02 || undefined,
            image_03: publication.image_03 || undefined,
          }}
        />
      </div>
      <div className="md:col-start-1 md:col-span-4 md:row-start-5 md:place-self-center capitalize text-lg">
        <p>{publication.type}</p>
        <p className="text-gray-700 mt-2">{publication.description}</p>
        <p>Precio: {publication.price}</p>
        <p>
          Ubicación: {publication.address} {publication.addressnumber}
        </p>
        <p>Contacto: {publication.phone}</p>
      </div>
    </div>
  );
}
