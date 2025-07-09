'use client'
import React from 'react';
import useTimer from './useTimer';

function CountdownTimer() {
  // Using the timer hook with 60 seconds initial time
  const { timeLeft, isRunning, start, pause, reset } = useTimer(60);

  // Format time to show minutes:seconds
  const formatTime = (seconds:number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div style={{
      padding: '30px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f0f0f0',
      borderRadius: '10px',
      maxWidth: '400px',
      margin: '20px auto'
    }}>
      <h2>Countdown Timer</h2>
      
      {/* Timer Display */}
      <div style={{
        fontSize: '48px',
        fontWeight: 'bold',
        color: timeLeft <= 10 ? '#ff4444' : '#333',
        margin: '20px 0',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '10px',
        border: timeLeft <= 10 ? '3px solid #ff4444' : '2px solid #ddd'
      }}>
        {formatTime(timeLeft)}
      </div>

      {/* Status Message */}
      <div style={{ margin: '15px 0', fontSize: '18px' }}>
        {timeLeft === 0 ? (
          <span style={{ color: '#ff4444', fontWeight: 'bold' }}>⏰ Time's Up!</span>
        ) : isRunning ? (
          <span style={{ color: '#4CAF50' }}>⏱️ Timer Running...</span>
        ) : (
          <span style={{ color: '#666' }}>⏸️ Timer Paused</span>
        )}
      </div>

      {/* Control Buttons */}
      <div style={{ margin: '20px 0' }}>
        {/* Start/Pause Button */}
        {!isRunning ? (
          <button
            onClick={start}
            disabled={timeLeft === 0}
            style={{
              padding: '12px 24px',
              fontSize: '16px',
              backgroundColor: timeLeft === 0 ? '#ccc' : '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: timeLeft === 0 ? 'not-allowed' : 'pointer',
              marginRight: '10px'
            }}
          >
            ▶️ Start
          </button>
        ) : (
          <button
            onClick={pause}
            style={{
              padding: '12px 24px',
              fontSize: '16px',
              backgroundColor: '#ff9800',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginRight: '10px'
            }}
          >
            ⏸️ Pause
          </button>
        )}

        {/* Reset Button */}
        <button
          onClick={reset}
          style={{
            padding: '12px 24px',
            fontSize: '16px',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          🔄 Reset
        </button>
      </div>

      {/* Progress Bar */}
      <div style={{
        width: '100%',
        height: '10px',
        backgroundColor: '#ddd',
        borderRadius: '5px',
        overflow: 'hidden',
        margin: '20px 0'
      }}>
        <div style={{
          width: `${(timeLeft / 60) * 100}%`,
          height: '100%',
          backgroundColor: timeLeft <= 10 ? '#ff4444' : '#4CAF50',
          transition: 'width 1s ease-in-out'
        }}></div>
      </div>

      {/* Instructions */}
      <div style={{
        fontSize: '14px',
        color: '#666',
        marginTop: '20px',
        padding: '15px',
        backgroundColor: 'white',
        borderRadius: '5px'
      }}>
        <p><strong>How to use:</strong></p>
        <p>• Click <strong>Start</strong> to begin countdown</p>
        <p>• Click <strong>Pause</strong> to stop the timer</p>
        <p>• Click <strong>Reset</strong> to go back to 1 minute</p>
        <p>• Timer turns red when 10 seconds or less remain</p>
      </div>
    </div>
  );
}

export default CountdownTimer;