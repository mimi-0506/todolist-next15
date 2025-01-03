"use client";
import "@/styles/components.css";
import useGetDatas from "../hooks/useGetDatas";
import { mainDatas } from "../types/types";
import Item from "./Item";
import { useEffect } from "react";
import Image from "next/image";
import { useTodoListStore } from "@/providers/store-provider";
import { AreaLoading } from "./Loading";

const StateBasedContent = ({
  array,
  name,
}: {
  array: [] | null;
  name: string;
}) => {
  if (!Array.isArray(array)) return <AreaLoading />;
  else {
    if (array.length)
      return array.map((now: mainDatas) => {
        return <Item value={now} key={now.name} />;
      });
    else
      return (
        <div className="emptyContainer">
          <picture>
            <source
              srcSet={`/images/${name}/small.png`}
              media="(max-width: 375px)"
            />
            <source
              srcSet={`/images/${name}/medium.png`}
              media="(max-width: 1919px, min-width: 743px)"
            />
            <img src={`/images/${name}/big.png`} alt="Responsive" />
          </picture>

          <p>
            {name.includes("todo") ? (
              <>
                할 일이 없어요.
                <br /> TODO를 새롭게 추가해주세요!
              </>
            ) : (
              <>
                아직 다 한 일이 없어요.
                <br /> 해야 할 일을 체크해보세요!
              </>
            )}
          </p>
        </div>
      );
  }
};

export default function TodoLists() {
  const { todos, dones } = useTodoListStore((state) => state);

  const { getDatas } = useGetDatas();

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <div className="todoListContainer">
      <div className="commonContainer todoContainer">
        <Image
          src="/svg/title_todo.svg"
          alt="Responsive"
          width="101"
          height="36"
        />
        <StateBasedContent array={todos} name="empty_todo" />
      </div>

      <div className="commonContainer doneContainer">
        <Image
          src="/svg/title_done.svg"
          alt="Responsive"
          width="101"
          height="36"
        />
        <StateBasedContent array={dones} name="empty_done" />
      </div>
    </div>
  );
}
