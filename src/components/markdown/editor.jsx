"use client";

import useInput from "@/hooks/useInput";

const Editor = () => {
  const [inputValue, setInputValue] = useInput();

  return (
    <div className="px-4">
      <textarea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="outline-none h-screen w-full bg-gray-200 px-4 py-6"
      />
    </div>
  );
};

export default Editor;
