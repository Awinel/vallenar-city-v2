import StoreList from "@/app/ui/store/StoreList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tiendas",
};
export default function Store() {
  return <StoreList />;
}
