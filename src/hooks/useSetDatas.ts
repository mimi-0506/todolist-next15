import { URL } from "../lib/constants";
import useGetDatas from "./useGetDatas";

export default function useSetDatas() {
  const { getDatas } = useGetDatas();

  const setDatas = async (value: string) => {
    const data = await fetch(`${URL}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: value }),
    });

    if (data.status === 201) getDatas();
  };
  return { setDatas };
}
