import { mainDatas } from "@/types/types";
import Image from "next/image";
import useDataStateModify from "../hooks/useDataStateModify";
import useGetDetailData from "../hooks/useGetDetailData";

export default function Item({ value }: { value: mainDatas }) {
  const { name, isCompleted } = value;

  const { getDetailData } = useGetDetailData();
  const { modifyState } = useDataStateModify();

  const handleState = async () => {
    //로딩중보다는.. 클릭 방지를 추가하는게 나을듯..
    //상세값을 가져온다음에 수정을 해야하는거?? 진짜로??

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
      <Image
        src={isCompleted ? "/svg/done.svg" : "/svg/todo.svg"}
        alt="Responsive"
        width="32"
        height="32"
        onClick={handleState}
      />
      <p>{name}</p>
    </div>
  );
}
