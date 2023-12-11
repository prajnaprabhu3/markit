"use client";

import Markdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import "katex/dist/katex.min.css";

const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.
# Hello
## Hello Prajna

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |

The lift coefficient ($C_L$) is a dimensionless coefficient.

Here is some JavaScript code:

~~~js
console.log('It works!')
~~~

`;

const Result = () => {
  return (
    <Markdown rehypePlugins={[rehypeKatex]} remarkPlugins={[remarkMath]}>
      {markdown}
    </Markdown>
  );
};

export default Result;
