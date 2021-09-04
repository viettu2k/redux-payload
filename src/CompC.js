import React from "react";
import { useDispatch } from "react-redux";

export default function CompC() {
  const dispatch = useDispatch();
  const changeUserName = () => {
    const user = {
      userName: "Alexander",
      userId: "12",
      userEmail: "alex@gmail.com",
    };
    dispatch({ type: "CHANGE_USER_NAME", payload: user });
  };

  return (
    <div>
      <h1>This is Component C</h1>
      <button onClick={changeUserName}>CHANGE USERNAME</button>
    </div>
  );
}
