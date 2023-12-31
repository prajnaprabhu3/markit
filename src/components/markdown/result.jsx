"use client";

import Markdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import "katex/dist/katex.min.css";
import useInput, { InputProvider } from "@/hooks/useInput";

const Result = () => {
  const [inputValue] = useInput();
  // console.log(inputValue);

  return (
    <Markdown
      rehypePlugins={[rehypeKatex]}
      remarkPlugins={[remarkMath]}
      className="px-8 flex flex-col gap-5 py-8"
    >
      {inputValue}
    </Markdown>
  );
};

export default Result;

// const markdown = `A paragraph with *emphasis* and **strong importance**.

// > A block quote with ~strikethrough~ and a URL: https://reactjs.org.
// # Hello
// ## Hello Prajna

// * Lists
// * [ ] todo
// * [x] done

// A table:

// | a | b |
// | - | - |

// The lift coefficient ($C_L$) is a dimensionless coefficient.

// Here is some JavaScript code:

// ~~~js
// console.log('It works!')
// ~~~

// `;
