import StoreList from "@/app/components/StoreList";
import CircularProgress from "@/app/ui/Skeletons";
import { Suspense } from "react";

export default async function StorePage() {
  return (
    <div>
      <h1 className={`text-2xl`}>Stores</h1>
      <Suspense fallback={<CircularProgress />}>
        <StoreList />
      </Suspense>
    </div>
  );
}
