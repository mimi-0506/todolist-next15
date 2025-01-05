"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTodoListStore } from "@/providers/store-provider";
import useDataStateModify from "@/hooks/useDataStateModify";

export default function ModifyButton({
  startLoading,
  id,
}: {
  startLoading: () => void;
  id: string | null;
}) {
  const router = useRouter();
  const { detail } = useTodoListStore((state) => state);
  const { modifyState } = useDataStateModify();

  const handleModify = async () => {
    if (!detail || !id) return;
    startLoading();

    //null 일시 api에서 막히므로 빈값도 string으로 가도록 해야 함
    await modifyState(
      {
        name: detail.name,
        memo: detail.memo || "",
        imageUrl: detail.imageUrl || "",
        isCompleted: detail.isCompleted,
      },
      id
    );
    router.push("/");
  };

  return (
    <button className="modifyButton shape_1" onClick={handleModify}>
      <Image src="/svg/check.svg" alt="modifyButton" width="16" height="16" />
      수정 완료
    </button>
  );
}
