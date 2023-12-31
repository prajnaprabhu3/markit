"use client";

import Editor from "@/components/markdown/editor";
import Result from "@/components/markdown/result";

import Menu from "@/components/menu";
import useToggle from "@/hooks/useToggle";

import { Toaster } from "sonner";

export default function Home() {
  // const [toggleColor, setToggleColor] = useState("bg-gray-800");
  // const [currentState, setCurrentState] = useState("editor");
  // const [currentState, setCurrentState] = useToggle();
  // const [toggleColor, setToggleColor] = useToggle();

  // const toggleState = () => {
  //   toggleColor == "bg-gray-800"
  //     ? setToggleColor("bg-rose-400")
  //     : setToggleColor("bg-gray-800");

  //   if (currentState === "editor") {
  //     setCurrentState("result");
  //     // setToggleColor("bg-rose-400");
  //   } else {
  //     setCurrentState("editor");
  //     // setToggleColor("bg-gray-800");
  //   }

  //   console.log(currentState);
  // };

  const { currentState, toggleState, toggleColor } = useToggle();

  return (
    <>
      <Toaster position="top-right" />
      {/* <InputProvider> */}
      {currentState === "editor" ? <Editor /> : <Result />}
      {/* <Menu onClick={toggleState} toggleColor={toggleColor} /> */}
      <Menu onClick={toggleState} toggleColor={toggleColor} />
      {/* </InputProvider> */}
    </>
  );
}
