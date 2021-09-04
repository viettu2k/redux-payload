const initialData = {
  gameName: "Football",
  playerName: "Messi",
  userName: "Johnathan",
};

function gamesReducer(state = initialData, action) {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, gameName: action.payload };

    case "CHANGE_PLAYER_NAME":
      return { ...state, playerName: action.payload };

    case "CHANGE_USER_NAME":
      return { ...state, userName: action.payload.userName };

    default:
      return state;
  }
}

export default gamesReducer;
