import React, { useState } from "react";
import Styles from './todolist.module.css';
export default function Todolist() {
  const [tasks, setTasks] = useState(["Creative", "Code" , "Clash"]);
  const [newtasks, setNewtasks] = useState("");

  function handleInputtasks(e) {
    setNewtasks(e.target.value);
  }

  function addTasks(e) {
    if(newtasks.trim() !== ""){
      setTasks( t => [...t , newtasks]);
      setNewtasks("");
    }
  }

  function handleRemove(idx) {
    setTasks(tasks.filter((task, index) => index !== idx));
  }

  function handleUpward(idx) {
     if(idx >0){
      const updatedtasks = [...tasks];
      [updatedtasks[idx],updatedtasks[idx -1]] = [updatedtasks[idx -1] , updatedtasks[idx] ];
      setTasks(updatedtasks);
     }
  }

  function handleDownward(idx) {
    if(idx < tasks.length-1){
      const updatedtasks = [...tasks];
      [updatedtasks[idx],updatedtasks[idx +1]] = [updatedtasks[idx +1] , updatedtasks[idx] ];
      setTasks(updatedtasks);
     }
  }
  return (
    <div className={Styles.Todolist}>
      <div>
        <h1>To - Do - List</h1>

        <input
          type="text"
          onChange={handleInputtasks}
          placeholder="Enter Your Tasks.."
          value={newtasks}
        />
        <button onClick={addTasks} className={Styles.addBtn}>
          Add Task
        </button>
      </div>
      <ol>
        {tasks.map((task, idx) => (
          <li key={idx}>
            <span className={Styles.text}>{task}  </span>
            <button className={Styles.deleteBtn} onClick={() => handleRemove(idx)}>
              Delete
            </button>
            <button className= {Styles.upBtn} onClick={() => handleUpward(idx)}>
              ☝️
            </button>
            <button className={Styles.downBtn} onClick={() => handleDownward(idx)}>
             👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
