import io from "socket.io-client";

let socket;

export const initialState = () => {
  console.log("server is connecting loading..");

  socket = io("http://localhost:3001/", {
    transports: ["websocket"],
  });
  socket.on("connect", () => console.log("server is connecting successful"));
};

export const resultBackendMessage = (color) => {
  socket.emit("newColor", color);
};

export const subscribe = (cb) => {
  socket.on("receive", (color) => {
    console.log(color);
    cb(color);
  });
};
