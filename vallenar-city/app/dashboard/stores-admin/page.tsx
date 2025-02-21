import { fetchStores } from "@/app/lib/data";
import StoreDisplayCard from "@/app/ui/store/StoreDisplayCard";

export default async function StorePage() {
  const stores = await fetchStores();

  return (
    <div>
      <h1 className={`text-2xl`}>Stores</h1>
      <div className="flex flex-wrap justify-evenly mt-5">
        {stores.map((store) => (
          <StoreDisplayCard
            key={store.id}
            id={store.id}
            name={store.name}
            address={store.address}
            addressnumber={store.addressnumber}
            description={store.description}
            image={store.image}
            phone={store.phone}
            type={store.type}
            email={store.email}
            facebook={store.facebook}
            instagram={store.instagram}
          />
        ))}
      </div>
    </div>
  );
}
