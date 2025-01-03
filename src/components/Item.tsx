import { mainDatas } from "@/types/types";
import Image from "next/image";
import useDataStateModify from "../hooks/useDataStateModify";
import useGetDetailData from "../hooks/useGetDetailData";
import { useState } from "react";
import { ButtonLoading } from "./Loading";

export default function Item({ value }: { value: mainDatas }) {
  const { name, isCompleted } = value;
  const [loading, setLoading] = useState(false);

  const { getDetailData } = useGetDetailData();
  const { modifyState } = useDataStateModify();

  const handleState = async () => {
    setLoading(true);

    const detailData = await getDetailData(value.id);
    await modifyState(
      {
        name: detailData.name,
        memo: detailData.memo || "",
        imageUrl: detailData.imageUrl || "",
        isCompleted: !detailData.isCompleted,
      },
      value.id
    );
  };

  return (
    <div className="item">
      {loading ? (
        <ButtonLoading />
      ) : (
        <Image
          src={isCompleted ? "/svg/done.svg" : "/svg/todo.svg"}
          alt="Responsive"
          width="32"
          height="32"
          onClick={handleState}
        />
      )}
      <p>{name}</p>
    </div>
  );
}
