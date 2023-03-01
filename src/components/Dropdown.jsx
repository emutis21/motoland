import React, { useEffect, useRef, useState } from "react";
import "../styles/Dropdown.scss";
import "material-symbols";

const Icon = ({ children }) => (
  <i className="material-symbols-outlined">{children}</i>
);

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setIsOpen(false));

  return (
    <div
      ref={ref}
      className={`dropdown ${isOpen ? "open" : ""}`}>
      <button className="button" onClick={() => setIsOpen(!isOpen)}>
        <Icon className="icon">{isOpen ? "close" : "expand_more"}</Icon>
        City
      </button>
      <div className="menu">
        <button>Bogotá</button>
        <button>Medellín</button>
        <button>Cartagena</button>
        <button>Tunja</button>
        <button>Pereira</button>
        <button>Cúcuta</button>
        <button>Villavicencio</button>
      </div>
    </div>
  );
};
