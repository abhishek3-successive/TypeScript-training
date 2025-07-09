import React, { ReactNode, MouseEvent } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  const handleOverlayClick = () => onClose();

  const handleContentClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // Prevent closing when clicking inside modal content
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex", alignItems: "center", justifyContent: "center",
        zIndex: 1000,
      }}
      onClick={handleOverlayClick}
    >
      <div
        onClick={handleContentClick}
        style={{
          background: "white",
          padding: 20,
          borderRadius: 4,
          minWidth: 300,
          position: "relative",
        }}
      >
        {children}
        <button onClick={onClose} style={{ marginTop: 16 }}>Close</button>
      </div>
    </div>
  );
}
