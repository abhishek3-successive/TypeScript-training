"use client";

import React, { useReducer } from "react";

// Define the shape of the state
type VoteState = {
  BJP: number;
  Congress: number;
};

// Define the possible action types
type VoteAction =
  | { type: "Vote_BJP" }
  | { type: "Vote_Congress" };

// Reducer function with typed state and action
const votingReducer = (state: VoteState, action: VoteAction): VoteState => {
  switch (action.type) {
    case "Vote_BJP":
      return { ...state, BJP: state.BJP + 1 };
    case "Vote_Congress":
      return { ...state, Congress: state.Congress + 1 };
    default:
      return state;
  }
};

export default function VoteCounter() {
  const [state, dispatch] = useReducer(votingReducer, { BJP: 0, Congress: 0 });

  return (
    <div>
      <h1>BJP: {state.BJP}</h1>
      <button onClick={() => dispatch({ type: "Vote_BJP" })}>Vote BJP</button>

      <h1>Congress: {state.Congress}</h1>
      <button onClick={() => dispatch({ type: "Vote_Congress" })}>
        Vote Congress
      </button>
    </div>
  );
}
