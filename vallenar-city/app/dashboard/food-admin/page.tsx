import { fetchFood } from "@/app/lib/data";
import FoodDisplayCard from "@/app/ui/food/FoodDisplayCard";

export default async function StorePage() {
  const food = await fetchFood();

  return (
    <div>
      <h1 className={`text-2xl text-center`}>Food</h1>
      <div className="flex ">
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
    </div>
  );
}
