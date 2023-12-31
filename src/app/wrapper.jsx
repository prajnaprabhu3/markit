"use client";

import Palette from "../components/palette";
import { MenuProvider, MenuConfig } from "kmenu";
import { ToggleProvider } from "@/hooks/useToggle";
import { InputProvider } from "@/hooks/useInput";

import "kmenu/dist/index.css";

const Wrapper = ({ children }) => {
  return (
    <ToggleProvider>
      <InputProvider>
        <MenuProvider>
          <Palette />
          {children}
        </MenuProvider>
      </InputProvider>
    </ToggleProvider>
  );
};

export default Wrapper;
