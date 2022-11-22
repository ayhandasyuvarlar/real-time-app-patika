import React from "react";
import { useState } from "react";
import { resultBackendMessage } from "../socketIoApi";
export default function Palette({activeColor}) {
  const [color, setColor] = useState('#rrggbb');
  return (
    <div className="palette-container">
      <input
        type="color"
        value={activeColor}
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <button type="click" onClick={(()=>{resultBackendMessage(color)})}>Click</button>
      {activeColor}
    </div>
  );
}
