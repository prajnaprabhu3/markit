"use client";

import { useKmenu } from "kmenu";
import { FiCopy } from "react-icons/fi";
import { FiCommand } from "react-icons/fi";
import { HiOutlineDownload } from "react-icons/hi";
import { HiOutlinePhotograph } from "react-icons/hi";

import Button from "./button";
import Toggle from "./toggle";

import useInput from "@/hooks/useInput";

import { Copy } from "@/lib/copy";
import { saveFile } from "@/lib/save";

const Menu = ({ onClick, toggleColor }) => {
  // const [toggleColor, setToggleColor] = useState<Variant>("bg-gray-800");
  // const [currentState, setCurrentState] = useState("editor");
  const { toggle } = useKmenu();
  const [inputValue] = useInput();

  return (
    <div className="fixed mx-auto bottom-10 w-screen z-50 flex items-center justify-center">
      <menu className="flex items-center justify-around bg-white w-[410px] px-2 h-12 rounded-lg">
        <Toggle onClick={onClick} color={toggleColor} />

        {/* buttons  */}
        <div className="flex gap-x-2">
          <Button
            title="Save"
            Icon={HiOutlineDownload}
            action={() => saveFile(inputValue)}
          />
          <Button title="Copy" Icon={FiCopy} action={() => Copy(inputValue)} />
          <Button title="Photo" Icon={HiOutlinePhotograph} />
        </div>

        {/* <FiCommand onClick={toggle} className="cursor-pointer" /> */}
        <button
          className="hidden md:flex items-center hover:bg-white px-2 py-[8px] rounded hover:scale-105 transition-transform duration-300"
          onClick={toggle}
        >
          <FiCommand />
        </button>
      </menu>
    </div>
  );
};

export default Menu;
