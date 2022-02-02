import React from "react";
import "./Spinner.css";

function Spinner({ partial, dashboard }) {
  return (
    <div
      className={` ${
        partial ? "h-70" : "h-screen"
      }  flex justify-center items-center`}
    >
      <div
        className={`spinner h-16 w-16 border-4 border-t-transparent ${
          dashboard ? "border-blue-600" : "border-green-500"
        }`}
      ></div>
    </div>
  );
}

export default Spinner;
