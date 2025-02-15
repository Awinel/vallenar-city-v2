import { CardProps } from "@/app/lib/definitions";
import React from "react";

const Cards = (props: CardProps) => {
  return <div>{props.title}</div>;
};

export default Cards;
