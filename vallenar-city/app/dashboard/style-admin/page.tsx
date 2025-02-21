import StyleList from "@/app/components/StyleList";
import CircularProgress from "@/app/ui/Skeletons";
import { Suspense } from "react";

export default async function StylePage() {
  return (
    <div>
      <h1 className={`text-2xl`}>Style</h1>
      <Suspense fallback={<CircularProgress />}>
        <StyleList />
      </Suspense>
    </div>
  );
}
