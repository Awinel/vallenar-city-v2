import FoodList from "@/app/components/FoodList";
import CircularProgress from "@/app/ui/Skeletons";
import { Suspense } from "react";

export default async function FoodPage() {
  return (
    <div>
      <h1 className={`text-2xl`}>Food</h1>
      <Suspense fallback={<CircularProgress />}>
        <FoodList />
      </Suspense>
    </div>
  );
}
