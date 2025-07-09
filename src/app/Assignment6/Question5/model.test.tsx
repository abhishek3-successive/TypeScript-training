import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "./model";

describe("Modal", () => {
  test("does not render when closed", () => {
    const { queryByRole } = render(<Modal isOpen={false} onClose={() => {}}>Content</Modal>);
    expect(queryByRole("dialog")).toBeNull();
  });

  test("renders when open and closes on close button click", () => {
    const handleClose = jest.fn();
    render(<Modal isOpen={true} onClose={handleClose}>Modal Content</Modal>);

    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();
    expect(screen.getByText("Modal Content")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Close"));
    expect(handleClose).toHaveBeenCalled();
  });

  test("closes when clicking on backdrop", () => {
    const handleClose = jest.fn();
    render(<Modal isOpen={true} onClose={handleClose}>Modal Content</Modal>);

    fireEvent.click(screen.getByRole("dialog"));
    expect(handleClose).toHaveBeenCalled();
  });

  test("does not close when clicking inside modal content", () => {
    const handleClose = jest.fn();
    render(<Modal isOpen={true} onClose={handleClose}>Modal Content</Modal>);

    fireEvent.click(screen.getByText("Modal Content"));
    expect(handleClose).not.toHaveBeenCalled();
  });
});
