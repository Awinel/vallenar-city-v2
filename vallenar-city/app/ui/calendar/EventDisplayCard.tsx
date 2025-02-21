import { formatDate } from "@/app/lib/dateFormatted";
import { Event } from "@/app/lib/definitions";
import React from "react";

const EventDisplayCard = ({
  address,
  addressnumber,
  date,
  description,
  name,
  phone,
  type,
}: Event) => {
  const formattedDate = formatDate(date);

  return (
    <div className="flex flex-col bg-[var(--color-05)] p-2 rounded-xl shadow-amber-950 shadow-lg">
      <h2 className="text-xl">
        {formattedDate.month} {formattedDate.day}
      </h2>
      <h3 className="text-lg font-normal">{name}</h3>
      <p>
        <strong>Type of Event:</strong> {type}
      </p>
      <p>
        <strong>Where:</strong> {address}, {addressnumber}
      </p>
      <p>
        <strong>Description: </strong>
        {description}
      </p>
      <p>
        <strong>Phone:</strong> {phone}
      </p>
    </div>
  );
};

export default EventDisplayCard;
