// 14.create a component that displays a list of tasks.
// Each task has a "Complete" button.
// Implement a feature where clicking the "Complete" button marks the task as completed.
// Use the useCallback hook to create dynamic callback functions for each task.
// Ensure that clicking the "Complete" button for one task doesn't trigger unnecessary re-renders for other tasks.
"use client";

import { useState, useCallback } from "react";

export default function TaskList() {
  const list = [
    { id: 1, task: "Task-1", isComplete: false },
    { id: 2, task: "Task-2", isComplete: false },
    { id: 3, task: "Task-3", isComplete: false },
  ];

  const [tasks, setTask] = useState(list);

  const toggle = useCallback((id:number) => {
    setTask((prevTask) =>
      prevTask.map((t) =>
        t.id === id ? { ...t, isComplete: !t.isComplete } : t
      )
    );
  },[]);

  return (
    <ul style={{backgroundColor : 'white'}}>
      {tasks.map((task) => (
        <li
          key={task.id}
          style={{
            color: task.isComplete ? "green" : "black",
            marginBottom: "8px",
          }}
        >
          {task.task}
          <button onClick={() => toggle(task.id)}>
            {task.isComplete ? "Completed" : "Complete"}
          </button>
        </li>
      ))}
    </ul>
  );
}