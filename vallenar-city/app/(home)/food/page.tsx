import FoodList from "@/app/ui/food/FoodList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comida",
};

export default function Food() {
  return <FoodList />;
}
