import React from "react";
import { useSelector } from "react-redux";

export default function CompA() {
  const gameObj = useSelector((state) => state);

  return (
    <div className="ca">
      <h1>The given name in gamesReducer is: {gameObj.gameName}</h1>
      <h1>The given player name in gamesReducer is: {gameObj.playerName}</h1>
      <h1>The given player name in gamesReducer is: {gameObj.userName}</h1>
    </div>
  );
}
