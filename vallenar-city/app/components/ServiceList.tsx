import { fetchServices } from "../lib/data";
import ServiceDisplayCard from "../ui/services/ServiceDisplayCard";

export default async function ServiceList() {
  const services = await fetchServices();

  return (
    <div className="flex flex-wrap justify-evenly mt-5">
      {services.map((service) => (
        <ServiceDisplayCard
          key={service.id}
          id={service.id}
          name={service.name}
          address={service.address}
          addressnumber={service.addressnumber}
          description={service.description}
          image={service.image}
          phone={service.phone}
          type={service.type}
          email={service.email}
          facebook={service.facebook}
          instagram={service.instagram}
        />
      ))}
    </div>
  );
}
