import { URL } from "../lib/constants";

export default function useSetImage() {
  const setImage = async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);

    const data = await fetch(`${URL}/images/upload`, {
      method: "POST",
      body: formData,
    });

    if (data.status === 201) {
      const jsonData = await data.json();
      return jsonData.url;
    }
  };
  return { setImage };
}
