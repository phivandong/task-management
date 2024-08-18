import React, { useState } from "react";
import data from "../data.json";

export const AddTaskModal = (props) => {
  const { modalShow, setModalShow } = props;
  const [newData, setNewData] = useState({ name: "", state: "" });
  const [taskName, setTaskName] = useState("");

  const handleCancel = () => {
    setModalShow(false);
  };

  const handleSubmit = async () => {
    // console.log({ taskName });
    data.push({ name: taskName });
    console.log(data);
    setModalShow(false);
  };

  return (
    <div>
      <p>Task</p>
      <button onClick={handleCancel}>X</button>
      <input
        type="text"
        placeholder="Type your task here..."
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        // onChange={(e) => console.log(e)}
      ></input>
      <p>Priority</p>
      <input placeholder="Type your task here..."></input>
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};
