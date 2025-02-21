import { fetchServices } from "@/app/lib/data";
import ServiceDisplayCard from "@/app/ui/services/ServiceDisplayCard";

export default async function StylePage() {
  const styles = await fetchServices();

  return (
    <div>
      <h1 className={`text-2xl text-center`}>Services</h1>
      <div className="flex flex-wrap justify-evenly">
        {styles.map((style) => (
          <ServiceDisplayCard
            key={style.id}
            id={style.id}
            name={style.name}
            address={style.address}
            addressnumber={style.addressnumber}
            description={style.description}
            image={style.image}
            phone={style.phone}
            type={style.type}
            email={style.email}
            facebook={style.facebook}
            instagram={style.instagram}
          />
        ))}
      </div>
    </div>
  );
}
