import React from "react";
import { useDispatch } from "react-redux";

export default function CompB() {
  const [gameName, setGameName] = React.useState("");
  const [playerName, setPlayerName] = React.useState("");

  const dispatch = useDispatch();

  const changeName = () => {
    dispatch({ type: "CHANGE_NAME", payload: gameName });
  };

  const changePlayerName = () => {
    dispatch({ type: "CHANGE_PLAYER_NAME", payload: playerName });
  };

  return (
    <div className="cb">
      <h1>This is component B</h1>
      <input
        type="text"
        placeholder="new game"
        value={gameName}
        onChange={(e) => setGameName(e.target.value)}
      />
      <button onClick={changeName}>CHANGE NAME</button>
      <br />
      <input
        type="text"
        placeholder="new player"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />
      <button onClick={changePlayerName}>CHANGE PLAYER NAME</button>
    </div>
  );
}
