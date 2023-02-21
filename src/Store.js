import { createContext, useReducer } from "react";
import { io } from "socket.io-client";

export const CTX = createContext();

const initialState = {
  general: [],
  special: [],
};

const reducer = (state, action) => {
  const { from, msg, topic } = action.payload;

  switch (action.type) {
    case "RECEIVE_MESSAGE":
      console.log("test");
      return {
        ...state,
        [topic]: [...state[topic], { from, msg }],
      };
    default:
      return state;
  }
};

let socket;

const sendChatAction = (value) => {
  socket.emit("chat message", value);
};

const Store = ({ children }) => {
  const [chats, dispatch] = useReducer(reducer, initialState);

  if (!socket) {
    socket = io(":3001");
    socket.on("chat message", (msg) => {
      dispatch({ type: "RECEIVE_MESSAGE", payload: msg });
    });
  }

  const user = "yuki" + Math.random(100).toFixed(2);

  return (
    <CTX.Provider value={{ chats, sendChatAction, user }}>
      {children}
    </CTX.Provider>
  );
};

export default Store;
