import { createContext, useContext, useState } from "react";

export const ToggleContext = createContext({
  currentState: "editor",
  toggleState: () => {},
  toggleColor: "bg-gray-800",
});

export const ToggleProvider = ({ children }) => {
  const [currentState, setCurrentState] = useState("editor");

  const toggleState = () => {
    // setCurrentState(currentState === "editor" ? "result" : "editor");
    if (
      currentState === "editor"
        ? setCurrentState("result")
        : setCurrentState("editor")
    );
  };

  const toggleColor = currentState === "editor" ? "bg-gray-800" : "bg-rose-400";

  return (
    <ToggleContext.Provider value={{ currentState, toggleState, toggleColor }}>
      {children}
    </ToggleContext.Provider>
  );
};

export default function useToggle() {
  return useContext(ToggleContext);
}
