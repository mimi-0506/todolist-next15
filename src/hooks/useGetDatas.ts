import { mainDatas } from "@/types/types";
import { URL } from "../lib/constants";
import { useTodoListStore } from "@/providers/store-provider";

export default function useGetDatas() {
  const { setTodos, setDones } = useTodoListStore((state) => state);
  const getDatas = async () => {
    const data = await fetch(`${URL}/items`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const jsonData = await data.json();

    const todoArray: mainDatas[] = [];
    const doneArray: mainDatas[] = [];

    jsonData.forEach((now: mainDatas) => {
      if (now.isCompleted) doneArray.push(now);
      else todoArray.push(now);
    });

    setTodos(todoArray);
    setDones(doneArray);
  };

  return { getDatas };
}
