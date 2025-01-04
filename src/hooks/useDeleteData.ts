import { URL } from "../lib/constants";
export default function useDeleteData() {
  const deleteData = async (id: number | string) => {
    const data = await fetch(`${URL}/items/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (data.status === 200) console.log(id, "delete success");
  };
  return { deleteData };
}
