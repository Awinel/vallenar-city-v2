import StoreCards from "@/app/ui/CardsClient";
import { fetchStores } from "@/app/lib/data";

export default async function StoreList() {
  const stores = await fetchStores(); // Server-side fetching

  return (
    <div className="flex flex-wrap justify-evenly gap-4">
      {stores.length > 0 ? (
        stores.map((store) => (
          <StoreCards
            id={store.id}
            key={store.id}
            name={store.name}
            description={store.description}
            image={store.image || "https://via.placeholder.com/150"}
          />
        ))
      ) : (
        <p>No stores available.</p>
      )}
    </div>
  );
}
