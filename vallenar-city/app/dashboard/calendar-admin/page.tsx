import { Suspense } from "react";
import { lilitaOne } from "@/app/ui/fonts";
import CircularProgress from "@/app/ui/Skeletons";
import EventsList from "@/app/components/EventList";

export default function EventPage() {
  return (
    <div>
      <h1 className={`${lilitaOne.className} text-2xl`}>Events</h1>

      {/* Wrap the async component in Suspense */}
      <Suspense fallback={<CircularProgress />}>
        <EventsList />
      </Suspense>
    </div>
  );
}
