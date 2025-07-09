import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "./login";

describe("LoginForm", () => {
  test("accepts username and password inputs", () => {
    render(<LoginForm onSubmit={() => {}} />);
    
    const usernameInput = screen.getByPlaceholderText("Username");
    const passwordInput = screen.getByPlaceholderText("Password");

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "secret" } });

    expect(usernameInput.value).toBe("testuser");
    expect(passwordInput.value).toBe("secret");
  });

  test("calls onSubmit with username and password on form submit", () => {
    const handleSubmit = jest.fn();
    render(<LoginForm onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByPlaceholderText("Username"), { target: { value: "myuser" } });
    fireEvent.change(screen.getByPlaceholderText("Password"), { target: { value: "mypassword" } });
    fireEvent.click(screen.getByText("Login"));

    expect(handleSubmit).toHaveBeenCalledWith({ username: "myuser", password: "mypassword" });
  });
});
