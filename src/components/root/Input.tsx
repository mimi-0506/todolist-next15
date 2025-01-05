"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import "@/styles/components.css";
import useSetDatas from "../../hooks/useSetDatas";
import { useTodoListStore } from "@/providers/store-provider";
import { ButtonLoading } from "../common/Loading";

const AddButton = ({
  handleAdd,
  loading,
  state,
}: {
  handleAdd: () => Promise<void>;
  loading: boolean;
  state: boolean;
}) => {
  return (
    <button
      onClick={handleAdd}
      className={`${state ? "dataNone" : ""} addButton shape_1`}
    >
      {loading ? (
        <ButtonLoading />
      ) : (
        <>
          <Image
            src={`/svg/${state ? "plus_none" : "plus"}.svg`}
            alt="addButton"
            width="16"
            height="16"
          />
          <p>추가하기</p>
        </>
      )}
    </button>
  );
};

export default function Input() {
  const { todos, dones } = useTodoListStore((state) => state);
  const { setDatas } = useSetDatas();
  const inputRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);

  const handleAdd = async () => {
    if (!inputRef.current || loading) return;

    const value = inputRef.current.value;

    if (value) {
      setLoading(true);
      await setDatas(value);
      setLoading(false);

      inputRef.current.value = "";
    }
  };
  return (
    <div className="inputContainer">
      <input
        type="text"
        ref={inputRef}
        className="input shape_1"
        placeholder="할 일을 입력해주세요"
      />
      <AddButton
        handleAdd={handleAdd}
        state={
          Array.isArray(todos) &&
          todos.length === 0 &&
          Array.isArray(dones) &&
          dones.length === 0
            ? true
            : false
        }
        loading={loading}
      />
    </div>
  );
}
