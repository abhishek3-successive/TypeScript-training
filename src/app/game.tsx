'use client';
import * as React from "react";
import { useState, useEffect } from "react";

// Define a type for cell values
type Player = "❌" | "⭕️" | "";
type Winner = Player | null;

export default function Game() {
  const [cells, setCells] = useState<Player[]>(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState<Player>("❌");
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [winner, setWinner] = useState<Winner>(null);

  // Check for winner
  const checkWinner = (board: Player[]): Winner => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (const [a, b, c] of winPatterns) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  // Handle cell click
  const handleCellClick = (index: number): void => {
    if (cells[index] === "" && !gameOver && currentPlayer === "❌") {
      const newCells = [...cells];
      newCells[index] = currentPlayer;
      setCells(newCells);

      const winner = checkWinner(newCells);
      if (winner) {
        setWinner(winner);
        setGameOver(true);
      } else if (newCells.every(cell => cell !== "")) {
        setGameOver(true);
      } else {
        setCurrentPlayer("⭕️");
      }
    }
  };

  // Handle AI move
  const handleAIMove = (): void => {
    const emptyCells = cells
      .map((value, index) => (value === "" ? index : null))
      .filter((index): index is number => index !== null);

    if (emptyCells.length > 0) {
      const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      const newCells = [...cells];
      newCells[randomIndex] = "⭕️";
      setCells(newCells);

      const winner = checkWinner(newCells);
      if (winner) {
        setWinner(winner);
        setGameOver(true);
      } else if (newCells.every(cell => cell !== "")) {
        setGameOver(true);
      } else {
        setCurrentPlayer("❌");
      }
    }
  };

  // Reset game
  const resetGame = (): void => {
    setCells(Array(9).fill(""));
    setCurrentPlayer("❌");
    setGameOver(false);
    setWinner(null);
  };

  // Render a single cell
  const renderCell = (index: number) => {
    return (
      <div
        className="cell"
        onClick={() => handleCellClick(index)}
        style={{
          width: "100px",
          height: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2.5rem",
          fontWeight: "bold",
          backgroundColor: "#f0f0f0",
          border: "2px solid #333",
          cursor: gameOver ? "default" : "pointer",
          transition: "background-color 0.2s",
        }}
        onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
          if (!gameOver && cells[index] === "") {
            (e.target as HTMLDivElement).style.backgroundColor = "#e0e0e0";
          }
        }}
        onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
          (e.target as HTMLDivElement).style.backgroundColor = "#f0f0f0";
        }}
      >
        {cells[index]}
      </div>
    );
  };

  // AI effect
  useEffect(() => {
    if (currentPlayer === "⭕️" && !gameOver) {
      const timer = setTimeout(() => {
        handleAIMove();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentPlayer, gameOver]);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{ marginBottom: "20px", color: "#333" }}>Tic-Tac-Toe</h1>

      <div style={{
        marginBottom: "20px",
        fontSize: "1.2rem",
        fontWeight: "bold"
      }}>
        {gameOver ? (
          winner ? `🎉 ${winner} Wins!` : "🤝 It's a Draw!"
        ) : (
          `Current Player: ${currentPlayer}`
        )}
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "repeat(3, 1fr)",
        gap: "0px",
        border: "3px solid #333",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
      }}>
        {cells.map((_, index) => (
          <div key={index}>
            {renderCell(index)}
          </div>
        ))}
      </div>

      <button
        onClick={resetGame}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "1rem",
          fontWeight: "bold",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.2s"
        }}
        onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
          (e.target as HTMLButtonElement).style.backgroundColor = "#45a049";
        }}
        onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
          (e.target as HTMLButtonElement).style.backgroundColor = "#4CAF50";
        }}
      >
        🔄 Reset Game
      </button>
    </div>
  );
}
