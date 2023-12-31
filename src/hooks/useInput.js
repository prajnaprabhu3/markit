import { createContext, useContext, useState } from "react";

const InputContext = createContext();

export const InputProvider = ({ children }) => {
  const [inputValue, setInputValue] =
    useState(`A paragraph with *emphasis* and **strong importance**.

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
`);

  return (
    <InputContext.Provider value={[inputValue, setInputValue]}>
      {children}
    </InputContext.Provider>
  );
};

export default function useInput() {
  return useContext(InputContext);
}
