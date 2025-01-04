"use client";
import "@/styles/components.css";
import useGetDatas from "../../hooks/useGetDatas";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTodoListStore } from "@/providers/store-provider";
import StateBasedContent from "./StateBasedContent";
import { mainDatas } from "@/types/types";
import { AreaLoading } from "../common/Loading";

export default function TodoLists() {
  const { todos, dones, setTodos, setDones } = useTodoListStore(
    (state) => state
  );
  const { getDatas } = useGetDatas();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTodoListDatas();
  }, []);

  const getTodoListDatas = async () => {
    setLoading(true);
    const datas = await getDatas();

    const todoArray = [];
    const doneArray = [];

    datas.forEach((now: mainDatas) => {
      if (now.isCompleted) doneArray.push(now);
      else todoArray.push(now);
    });

    setTodos(todoArray);
    setDones(doneArray);
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
