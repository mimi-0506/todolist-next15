"use client";
import "@/styles/components.css";
import useGetDatas from "../../hooks/useGetDatas";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTodoListStore } from "@/providers/store-provider";
import StateBasedContent from "./StateBasedContent";

import { AreaLoading } from "../common/Loading";

export default function TodoLists() {
  const { todos, dones } = useTodoListStore((state) => state);
  const { getDatas } = useGetDatas();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTodoListDatas();
  }, []);

  const getTodoListDatas = async () => {
    setLoading(true);
    await getDatas();
    setLoading(false);
  };

  return (
    <div className="todoListContainer">
      <div className="commonContainer todoContainer">
        <Image
          src="/svg/title_todo.svg"
          alt="Responsive"
          width="101"
          height="36"
        />
        {loading ? (
          <AreaLoading />
        ) : (
          <StateBasedContent array={todos} name="empty_todo" />
        )}
      </div>

      <div className="commonContainer doneContainer">
        <Image
          src="/svg/title_done.svg"
          alt="Responsive"
          width="101"
          height="36"
        />
        {loading ? (
          <AreaLoading />
        ) : (
          <StateBasedContent array={dones} name="empty_done" />
        )}
      </div>
    </div>
  );
}
