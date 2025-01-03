import { URL } from "../lib/constants";
import { modifyData } from "../types/types";
import useGetDatas from "./useGetDatas";

export default function useDataStateModify() {
  const { getDatas } = useGetDatas();

  const modifyState = async (value: modifyData, id: number) => {
    const data = await fetch(`${URL}/items/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });

    if (data.status === 200) getDatas();
  };

  return { modifyState };
}
