import { Event } from "@/app/lib/definitions";
import React from "react";

const EventDisplayCard = ({
  id,
  address,
  addressnumber,
  date,
  description,
  image,
  name,
  phone,
  type,
}: Event) => {
  return (
    <div>
      <p>
        {id}, {address}, {addressnumber}, {date}, {description}, {image}, {name}
        , {phone}, {type}
      </p>
    </div>
  );
};

export default EventDisplayCard;
