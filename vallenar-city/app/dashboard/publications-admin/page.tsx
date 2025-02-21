import { fetchPublications } from "@/app/lib/data";
import PublicationDisplayCard from "@/app/ui/publications/PublicationDisplayCard";

export default async function StylePage() {
  const publications = await fetchPublications();

  return (
    <div>
      <h1 className={`text-2xl text-center`}>Publications</h1>
      <div className="flex flex-wrap justify-evenly">
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
    </div>
  );
}
