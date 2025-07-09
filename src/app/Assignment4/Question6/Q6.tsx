// 6.Build a simple todo list component with a text input for adding new tasks and a list to display them.
//  Use controlled components to handle the input and update the list of tasks.
'use client';
import { useState, ChangeEvent } from "react";

export default function TodoList() {
    const [taskList, setTaskList] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>("");

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleAddTask = () => {
        if (inputValue.trim() !== "") {
            setTaskList([...taskList, inputValue]);
            setInputValue(""); // Clear input after adding
        }
    };

    return (
        <>
            <input
                type="text"
                placeholder="Enter the task"
                value={inputValue}
                onChange={handleInputChange}
            />
            <button onClick={handleAddTask}>Add</button>

            <h2>Your task list:</h2>
            <ul>
                {taskList.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </>
    );
}
