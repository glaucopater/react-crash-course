import * as React from "react";
import "./style.css";

export const Card = (props: { value: number }) => {
  const { value } = props;
  return (
    <div className="Card">
      <h1>This is a card {value}</h1>
      <p>Lorem ipsum bla bla bla</p>
    </div>
  );
};
