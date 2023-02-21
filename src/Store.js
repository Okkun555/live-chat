import { createContext, useReducer } from "react";
import { io } from "socket.io-client";

export const CTX = createContext();

const initialState = {
  general: [
    { from: "Yuki", msg: "はじめまして！" },
    { from: "Yuki", msg: "元気？" },
    { from: "Yoko", msg: "体調はいいよ！" },
  ],
  special: [],
};

const reducer = (state, action) => {
  const { from, msg, topic } = action.payload;

  switch (action.type) {
    case "RECEIVE_MESSAGE":
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
  if (!socket) {
    socket = io(":3001");
  }

  const [chats, dispatch] = useReducer(reducer, initialState);

  return (
    <CTX.Provider value={{ chats, sendChatAction }}>{children}</CTX.Provider>
  );
};

export default Store;
