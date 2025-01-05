"use client";

import Image from "next/image";
import { useTodoListStore } from "@/providers/store-provider";
import { useRef, useEffect, useState } from "react";

export default function Memo() {
  const { detail, setDetail } = useTodoListStore((state) => state);
  const nameRef = useRef(null);
  const [modify, setModify] = useState(false);

  useEffect(() => {
    if (modify && nameRef.current) nameRef.current?.focus();
  }, [modify]);

  const handleClick = () => {
    setModify((x) => !x);
  };

  const handleNameModify = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    if (detail && e.target.value !== detail?.name)
      setDetail({ ...detail, name: e.target.value });
    setModify(false);
  };

  const handleCompleteModify = () => {
    if (detail) setDetail({ ...detail, isCompleted: !detail?.isCompleted });
    setModify(false);
  };

  return (
    <div className={`${detail?.isCompleted ? "doneBackground" : ""} title`}>
      {modify ? (
        <input
          type="text"
          defaultValue={detail?.name}
          ref={nameRef}
          onBlur={handleNameModify}
        />
      ) : (
        <>
          <Image
            src={detail?.isCompleted ? "/svg/done.svg" : "/svg/todo.svg"}
            alt="completeCheck"
            width="32"
            height="32"
            onClick={handleCompleteModify}
          />
          <p onClick={handleClick}>{detail?.name}</p>
        </>
      )}
    </div>
  );
}
