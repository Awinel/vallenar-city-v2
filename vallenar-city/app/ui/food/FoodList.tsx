import CardsClient from "@/app/ui/food/FoodCards";
import { fetchFood } from "@/app/lib/data";

export default async function FoodList() {
  const food = await fetchFood(); // Server-side fetching

  return (
    <div className="flex flex-wrap justify-evenly gap-4">
      {food.length > 0 ? (
        food.map((foodR) => (
          <CardsClient
            id={foodR.id}
            key={foodR.id}
            name={foodR.name}
            description={foodR.description}
            image={foodR.image || "https://via.placeholder.com/150"}
          />
        ))
      ) : (
        <p>Sin Lugares de Comida por el momento</p>
      )}
    </div>
  );
}
