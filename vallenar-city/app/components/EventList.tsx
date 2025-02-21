import { fetchCalendarEvents } from "@/app/lib/data";
import EventDisplayCard from "@/app/ui/calendar/EventDisplayCard";

export default async function EventsList() {
  const events = await fetchCalendarEvents(); // Streaming happens here

  return (
    <div className="flex flex-wrap justify-evenly mt-5">
      {events.map((event) => (
        <EventDisplayCard
          key={event.id}
          id={event.id}
          name={event.name}
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
