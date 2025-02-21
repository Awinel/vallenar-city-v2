import { Store } from "@/app/lib/definitions";
import React from "react";

const StoreDisplayCard = ({
  name,
  address,
  addressnumber,
  phone,
  type,
  instagram,
  facebook,
}: Store) => {
  return (
    <div className="inline-block bg-[var(--color-05)] p-2 rounded-xl shadow-amber-950 shadow-lg my-2 mx-2 max-w-[250px]">
      <h2 className="text-xl"></h2>
      <h3 className="text-lg font-normal">{name}</h3>
      <p>
        <strong>Type of Store:</strong> {type}
      </p>
      <p>
        <strong>Direction:</strong> {address}, {addressnumber}
      </p>
      <p>
        <strong>Phone:</strong> {phone}
      </p>
      {instagram && (
        <p>
          <strong>Instagram: </strong>
          {instagram}
        </p>
      )}
      {facebook && (
        <p>
          <strong>Facebook: </strong>
          {facebook}
        </p>
      )}
    </div>
  );
};

export default StoreDisplayCard;
