import { URL } from "../lib/constants";

export default function useGetDetailData() {
  const getDetailData = async (id: number) => {
    const data = await fetch(`${URL}/items/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const jsonData = await data.json();

    console.log("detailData", jsonData);
    return jsonData;
  };

  return { getDetailData };
}
