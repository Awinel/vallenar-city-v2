import { fetchStores } from "../lib/data";
import StoreDisplayCard from "../ui/store/StoreDisplayCard";

export default async function StoreList() {
  const stores = await fetchStores();

  return (
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
  );
}
