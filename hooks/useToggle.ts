import { createContext, useContext } from "react";

export const ToggleContext = createContext({
  currentState: "editor",
  toggleState: () => {},
});

export const ToggleProvider = ToggleContext.Provider;

export default function useToggle() {
  return useContext(ToggleContext);
}
