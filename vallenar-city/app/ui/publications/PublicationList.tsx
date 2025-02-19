import CardsClient from "@/app/ui/publications/PublicationCard";
import { fetchPublications } from "@/app/lib/data";

export default async function PublicationsList() {
  const publications = await fetchPublications(); // Server-side fetching

  return (
    <div className="flex flex-wrap justify-evenly gap-4">
      {publications.length > 0 ? (
        publications.map((publication) => (
          <CardsClient
            id={publication.id}
            key={publication.id}
            title={publication.title}
            description={publication.description}
            image={`/image/${publication.image}`}
            address={publication.address}
            addressNumber={publication.addressNumber}
            phone={publication.phone}
            price={publication.price}
            type={publication.type}
            image01={`/image/${publication.image01}` || null}
            image02={`/image/${publication.image02}` || null}
            image03={`/image/${publication.image03}` || null}
          />
        ))
      ) : (
        <p>Sin Lugares de Comida por el momento</p>
      )}
    </div>
  );
}
