import * as React from "react";
import "./styles.css";
import { Deck } from "./containers/Deck";
import { Card } from "./components/Card";

export default function App() {
  const handleCounterClick = (cardValue: number) => {
    console.log("App handleCounterClick ", cardValue);
  };

  const cards = Array.from(Array(3).keys()).map((item) => (
    <Card
      key={item}
      value={item}
      counterClick={(val: number) => handleCounterClick(val)}
    />
  ));

  return (
    <div className="App">
      <h1>React Crash Course</h1>
      <h2>Session 1</h2>
      <Deck cards={cards} />
    </div>
  );
}
