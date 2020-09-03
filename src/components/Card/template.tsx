import * as React from "react";
import "./style.css";

export const Card = (props: { value: number }) => {
  const { value } = props;
  const handleOnClick = () => {
    console.log("click on card: " + value);
  };
  const cssClasses = ["Card", ""];
  return (
    <div className={cssClasses.join(" ")} onClick={handleOnClick}>
      <h3>This is a card {value}</h3>
      <p>Lorem ipsum bla bla bla</p>
    </div>
  );
};
