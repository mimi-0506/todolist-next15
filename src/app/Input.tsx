"use client";

import { useRef } from "react";

export default function Input() {
  const inputRef = useRef();

  const handleAdd = () => {
    const value = inputRef.current.value;
    console.log(value);

    //넣는 로직 추가
  };
  return (
    <div>
      <input type="text" ref={inputRef} />{" "}
      <button onClick={handleAdd}>추가하기</button>
    </div>
  );
}
