import PublicationsList from "@/app/ui/publications/PublicationList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publicaciones",
};
export default function Food() {
  return <PublicationsList />;
}
