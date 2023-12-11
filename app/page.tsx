"use client";
import { useState } from "react";
import Editor from "@/components/markdown/editor";
import Result from "@/components/markdown/result";

import Menu from "@/components/menu";
import useToggle, { ToggleProvider } from "@/hooks/useToggle";

export default function Home() {
  const [toggleColor, setToggleColor] = useState("bg-gray-800");
  const [currentState, setCurrentState] = useState("editor");

  console.log(currentState);

  const toggleState = () => {
    toggleColor == "bg-gray-800"
      ? setToggleColor("bg-rose-400")
      : setToggleColor("bg-gray-800");

    if (currentState === "editor") {
      setCurrentState("result");
    } else setCurrentState("editor");
  };

  return (
    <ToggleProvider value={{ currentState, toggleState }}>
      <main className="">
        {currentState === "editor" ? <Editor /> : <Result />}
        <Menu onClick={toggleState} toggleColor={toggleColor} />
      </main>
    </ToggleProvider>
  );
}
