"use client";

import { useRef } from "react";
import Image from "next/image";
import "@/styles/components.css";
import useSetDatas from "../hooks/useSetDatas";

export default function Input() {
  const { setDatas } = useSetDatas();
  const inputRef = useRef(null);

  const handleAdd = async () => {
    const value = inputRef.current?.value;
    //loading 추가하기..
    if (value) setDatas(value);
  };
  return (
    <div className="inputContainer">
      <input
        type="text"
        ref={inputRef}
        className="input shape_1"
        placeholder="할 일을 입력해주세요"
      />
      <button onClick={handleAdd} className="addButton shape_1">
        <Image src="/svg/plus.svg" alt="Responsive" width="16" height="16" />
        <p>추가하기</p>
      </button>
    </div>
  );
}
