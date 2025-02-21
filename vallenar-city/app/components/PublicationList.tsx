import { fetchPublications } from "../lib/data";
import PublicationDisplayCard from "../ui/publications/PublicationDisplayCard";

export default async function PublicationList() {
  const publications = await fetchPublications();

  return (
    <div className="flex flex-wrap justify-evenly mt-5">
      {publications.map((publication) => (
        <PublicationDisplayCard
          key={publication.id}
          id={publication.id}
          address={publication.address}
          addressnumber={publication.addressnumber}
          type={publication.type}
          title={publication.title}
          price={publication.price}
          phone={publication.phone}
          userId={publication.userId}
          description={publication.description}
          image={publication.image}
        />
      ))}
    </div>
  );
}
