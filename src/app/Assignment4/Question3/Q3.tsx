// 3.Create a component with controlled input field and a button. 
// When the user enters a specific value into the input (e.g., "show"), a new component should be rendered below the input, displaying a message. 
// Otherwise, nothing should be displayed.
'use client'
import { ChangeEvent, useState } from "react";

export default function ControlledRender() {
  const [input, setInput] = useState('');

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Type 'show'"
      />
      {input === "show" && <div>Message Displayed</div>}
    </>
  );
}
