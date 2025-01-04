import { URL } from "../lib/constants";

export default function useGetDatas() {
  const getDatas = async () => {
    const data = await fetch(`${URL}/items`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const jsonData = await data.json();
    return jsonData;
  };

  return { getDatas };
}
