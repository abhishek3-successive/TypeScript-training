'use client'
// 7.Create a functional component called Notification.
// Use the useState hook to manage a state variable named message initialized to an empty string.
// Use the useEffect hook to show a notification message for 5 seconds whenever the message state changes.
// Render the notification message in a <div> element.
// After 5 seconds, clear the message to hide the notification.
import { containerStyle,buttonStyle,notificationStyle } from "./page.css";
import { useState , useEffect } from "react"
export default function Notification() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [message]);

  return (
    <main style={containerStyle}>
      <button 
        style={buttonStyle} 
        onClick={() => setMessage("This is a new message!")}
      >
        Notify Me
      </button>

      {message && (
        <div style={notificationStyle}>
          {message}
        </div>
      )}
    </main>
  );
}
