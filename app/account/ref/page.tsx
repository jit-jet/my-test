"use client";

import { useEffect, useRef } from "react";

export default function page() {
  const renderCount = useRef(0);
//   useEffect(() => {
    renderCount.current = renderCount.current + 1;
//   });
  const inputRef = useRef(null);
  const btnRef = useRef(null);
  console.log(inputRef.current);
  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.value = "default val";
    btnRef.current.click()
  }, []);
  return (
    <div className="m-5 ">
      <h1>use ref</h1>
      <input className="w-1/4 h-6 border-2" ref={inputRef} />
      <br />
      <div ref={btnRef} onClick={(_) => console.log("clicked btn")}>log button</div>
      <br/>
      <h1>{renderCount.current}</h1>
    </div>
  );
}
