"use client";

import { ReactNode } from "react";
import { MenuProvider, MenuConfig } from "kmenu";
import Palette from "../components/palette";
import "kmenu/dist/index.css";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const menuConfig: MenuConfig = {
    // backdropColor: " #14151630",
    // backdropBlur: 4,
    // backgroundColor: "#f7f3f3",
    // breadcrumbColor: "#ece8e8",
    // borderWidth: 1,
    // // borderColor: "#3F3F3F",
    // inputBorder: "#d7d8da",
    // inputColor: "#00000",
    // commandActive: "#3F3F3F",
    // boxShadow: "0px 0px 0px 0px #00000020",
  };
  return (
    <MenuProvider config={menuConfig}>
      <Palette />
      {children}
    </MenuProvider>
  );
};

export default Wrapper;
