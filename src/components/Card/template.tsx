import * as React from "react";
import "./style.css";

export const Card = (props: {
  value: number;
  counterClick: (cardValue: number) => void;
}) => {
  const [currentValue, setCurrentValue] = React.useState(0);
  const { value, counterClick } = props;

  const handleOnClick = (e: any) => {
    console.log("click on card: " + value, e.target);
    setCurrentValue(currentValue + 1);
    counterClick(value);
  };

  console.log("render Card ", value);

  return (
    <div className="Card" onClick={handleOnClick}>
      <h3>This is card {currentValue}</h3>
      <p>Lorem ipsum bla bla bla</p>
    </div>
  );
};
