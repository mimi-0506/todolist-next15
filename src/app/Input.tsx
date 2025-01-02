"use client";

import { useRef } from "react";
import Image from "next/image";
import "./components.css";

export default function Input() {
  const inputRef = useRef();

  const handleAdd = () => {
    const value = inputRef.current.value;
    console.log(value);

    //넣는 로직 추가
  };
  return (
    <div className="inputContainer">
      <input
        type="text"
        ref={inputRef}
        className="input"
        placeholder="할 일을 입력해주세요"
      />
      <button onClick={handleAdd} className="addButton">
        <Image src="/svg/plus.svg" alt="Responsive" width="16" height="16" />
        <p>추가하기</p>
      </button>
    </div>
  );
}
