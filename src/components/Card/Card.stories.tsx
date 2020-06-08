import React from "react";
import Card from "./Card";

export default {
  title: "Card",
  component: Card,
};

export const TextCard = () => (
  <Card title="Welcome!" paragraph="To this example" />
);
