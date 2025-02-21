import { fetchFood } from "../lib/data";
import FoodDisplayCard from "../ui/store/StoreDisplayCard";

export default async function FoodList() {
  const food = await fetchFood(); // Streaming happens here
  return (
    <div className="flex flex-wrap justify-evenly mt-5">
      {food.map((singleFood) => (
        <FoodDisplayCard
          key={singleFood.id}
          id={singleFood.id}
          name={singleFood.name}
          address={singleFood.address}
          addressnumber={singleFood.addressnumber}
          description={singleFood.description}
          image={singleFood.image}
          phone={singleFood.phone}
          type={singleFood.type}
          email={singleFood.email}
          facebook={singleFood.facebook}
          instagram={singleFood.instagram}
        />
      ))}
    </div>
  );
}
