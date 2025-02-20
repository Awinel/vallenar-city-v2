import { fetchCalendarEvents } from "@/app/lib/data";
import EventDisplayCard from "@/app/ui/calendar/EventDisplayCard";
import { lilitaOne } from "@/app/ui/fonts";

export default async function EventPage() {
  const events = await fetchCalendarEvents();

  return (
    <div>
      <h1 className={`${lilitaOne.className} text-2xl`}>Events</h1>
      {events.map((event) => (
        <EventDisplayCard
          key={event.id}
          id={event.id}
          name={event.date}
          type={event.type}
          date={event.date}
          address={event.address}
          addressnumber={event.addressnumber}
          description={event.description}
          image={event.image}
          phone={event.phone}
        />
      ))}
    </div>
  );
}
