import React from "react";
import data from "../data.json";

export const Task = () => {
  return (
    <div>
      {data.map((elm, idx) => (
        <div key={idx}>
          <h1>{elm.name}</h1>
          <p>{elm.state}</p>
        </div>
      ))}
    </div>
  );
};
