"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import "@/styles/components.css";
import useSetDatas from "../hooks/useSetDatas";
import { useTodoListStore } from "@/providers/store-provider";

export default function Input() {
  const { todos, dones } = useTodoListStore((state) => state);
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
      {Array.isArray(todos) &&
      todos.length === 0 &&
      Array.isArray(dones) &&
      dones.length === 0 ? (
        <button onClick={handleAdd} className={`dataNone addButton shape_1`}>
          <Image
            src="/svg/plus_none.svg"
            alt="Responsive"
            width="16"
            height="16"
          />
          <p>추가하기</p>
        </button>
      ) : (
        <button onClick={handleAdd} className={`addButton shape_1`}>
          <Image src="/svg/plus.svg" alt="Responsive" width="16" height="16" />
          <p>추가하기</p>
        </button>
      )}
    </div>
  );
}
