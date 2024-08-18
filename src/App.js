import { useState } from "react";
import "./App.css";
import { Task } from "./components/Task";
import { AddTaskModal } from "./components/AddTaskModal";

function App() {
  const [newTask, setNewTask] = useState(false);

  return (
    <>
      <button onClick={() => setNewTask(true)}>Add Task</button>
      <Task />
      {newTask && (
        <AddTaskModal modalShow={newTask} setModalShow={setNewTask} />
      )}
    </>
  );
}

export default App;
