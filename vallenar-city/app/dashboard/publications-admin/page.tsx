import PublicationList from "@/app/components/PublicationList";
import { fetchPublications } from "@/app/lib/data";
import CircularProgress from "@/app/ui/Skeletons";
import { Suspense } from "react";

export default async function PublicationsPage() {
  const publications = await fetchPublications();

  return (
    <div>
      <h1 className={`text-2xl`}>Publications</h1>
      <Suspense fallback={<CircularProgress />}>
        <PublicationList />
      </Suspense>
    </div>
  );
}
