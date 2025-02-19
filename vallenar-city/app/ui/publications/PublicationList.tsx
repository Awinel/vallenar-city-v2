import CardsClient from "@/app/ui/publications/PublicationCard";
import { fetchPublications } from "@/app/lib/data";

export default async function PublicationsList() {
  const publications = await fetchPublications(); // Server-side fetching

  return (
    <div className="flex flex-col  gap-4">
      {publications.length > 0 ? (
        publications.map((publication) => (
          <CardsClient
            id={publication.id}
            key={publication.id}
            title={publication.title}
            description={publication.description}
            image={publication.image}
            address={publication.address}
            addressNumber={publication.addressNumber}
            phone={publication.phone}
            price={publication.price}
            type={publication.type}
            image01={publication.image01 || null}
            image02={publication.image02 || null}
            image03={publication.image03 || null}
          />
        ))
      ) : (
        <p>Sin publicaciones de momento</p>
      )}
    </div>
  );
}
