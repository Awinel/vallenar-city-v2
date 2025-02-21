import { Publication } from "@/app/lib/definitions";
import React from "react";

const PublicationDisplayCard = ({
  title,
  userId,
  address,
  addressnumber,
  phone,
  price,
  type,
}: Publication) => {
  return (
    <div className="bg-[var(--color-05)] p-2 rounded-xl shadow-amber-950 shadow-lg my-2 mx-2">
      <h2 className="text-xl"></h2>
      <h3 className="text-lg font-normal">{title}</h3>
      <p>
        <strong>{userId}</strong>
      </p>
      <p>
        <strong>Type: </strong> {type}
      </p>
      <p>Price: {price}</p>
      <p>
        <strong>Direction:</strong> {address}, {addressnumber}
      </p>
      <p>
        <strong>Phone:</strong> {phone}
      </p>
    </div>
  );
};

export default PublicationDisplayCard;
