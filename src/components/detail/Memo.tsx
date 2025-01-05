"use client";
import { useTodoListStore } from "@/providers/store-provider";
import { useRef } from "react";
export default function Memo() {
  const { detail, setDetail } = useTodoListStore((state) => state);
  const memoRef = useRef<HTMLTextAreaElement>(null);

  const handleMemoClick = () => {
    memoRef.current?.focus();
  };

  const handleMemoModify = (
    e: React.FocusEvent<HTMLTextAreaElement, Element>
  ) => {
    if (detail && e.target.value !== detail?.name)
      setDetail({ ...detail, memo: e.target.value });
  };

  return (
    <div className="textContainer" onClick={handleMemoClick}>
      <h2>Memo</h2>
      <div className="textareaContainer">
        <textarea
          ref={memoRef}
          defaultValue={detail?.memo || ""}
          onBlur={handleMemoModify}
        />
      </div>
    </div>
  );
}
