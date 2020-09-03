import * as React from "react";
import "./styles.css";
import { Card } from "./components/Card";

export default function App() {
  return (
    <div className="App">
      <h1>React Crash Course</h1>
      <h2>Session 1</h2>
      <Card value={1} />
      <Card value={2} />
    </div>
  );
}
