import CardsClient from "@/app/ui/publications/PublicationCard";
import { fetchPublications } from "@/app/lib/data";

export default async function PublicationsList() {
  const publications = await fetchPublications(); // Server-side fetching

  return (
    <div className="flex flex-col gap-8 my-5">
      {publications.length > 0 ? (
        publications.map((publication) => (
          <CardsClient
            id={publication.id}
            key={publication.id}
            title={publication.title}
            description={publication.description}
            image={publication.image}
            address={publication.address}
            addressnumber={publication.addressnumber}
            phone={publication.phone}
            price={publication.price}
            type={publication.type}
            image_01={publication.image_01 || null}
            image_02={publication.image_02 || null}
            image_03={publication.image_03 || null}
          />
        ))
      ) : (
        <p>Sin publicaciones de momento</p>
      )}
    </div>
  );
}
