"use client";

import { useEffect } from "react";

export default function Modal({ children, onClose }) {
  // Close modal when Escape key is pressed
  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscapeKey);

    // Prevent scrolling on the body when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  // Close modal when clicking on the backdrop
  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
