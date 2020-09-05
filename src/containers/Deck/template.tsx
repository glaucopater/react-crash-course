import * as React from "react";

export const Deck = (props: any) => {
  const { cards } = props;
  return <div className="Deck">{cards}</div>;
};
