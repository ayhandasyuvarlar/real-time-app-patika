import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Palette from "./components/Palette";
import { initialState, subscribe } from "./socketIoApi";

function App() {
  const [colorActive, setColorActive] = useState("");
  useEffect(() => {
    initialState();
    subscribe((color) => { 
      setColorActive(color);
    });
  });
  return (
    <div className="App" style={{ backgroundColor: colorActive}}>
      <Palette activeColor={colorActive}/>
    </div>
  );
}

export default App;
