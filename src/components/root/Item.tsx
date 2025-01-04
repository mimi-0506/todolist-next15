import { mainDatas } from "@/types/types";
import Image from "next/image";
import useDataStateModify from "../../hooks/useDataStateModify";
import useGetDetailData from "../../hooks/useGetDetailData";
import { useState } from "react";
import { ButtonLoading } from "../common/Loading";
import { useRouter } from "next/navigation";

export default function Item({ value }: { value: mainDatas }) {
  const router = useRouter();

  const { name, isCompleted } = value;
  const [loading, setLoading] = useState(false);

  const { getDetailData } = useGetDetailData();
  const { modifyState } = useDataStateModify();

  const handleState = async (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    e.stopPropagation();

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

  const handleClicktoMove = () => {
    router.push(`/items/${value.id}`);
  };

  return (
    <div className="item" onClick={handleClicktoMove}>
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
