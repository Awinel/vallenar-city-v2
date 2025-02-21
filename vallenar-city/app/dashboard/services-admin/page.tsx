import ServiceList from "@/app/components/ServiceList";
import CircularProgress from "@/app/ui/Skeletons";
import { Suspense } from "react";

export default async function ServicesPage() {
  return (
    <div>
      <h1 className={`text-2xl`}>Services</h1>
      <Suspense fallback={<CircularProgress />}>
        <ServiceList />
      </Suspense>
    </div>
  );
}
