import { useState } from "react";
import "./index.css";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");
  const red = () => {
    setColor("red");
  };
  const blue = () => {
    setColor("blue");
  };
  const yellow = () => {
    setColor("yellow");
  };
  const black = () => {
    setColor("black");
  };
  const wheat = () => {
    setColor("wheat");
  };

  return (
    <>
      <div
        className="inset-0 fixed duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed z-10 flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={red}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={blue}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              blue
            </button>
            <button
              onClick={wheat}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "wheat" }}
            >
              wheat
            </button>
            <button
              onClick={black}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "black" }}
            >
              black
            </button>
            <button
              onClick={yellow}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "yellow" }}
            >
              yellow
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
