"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTodoListStore } from "@/providers/store-provider";
import useDeleteData from "@/hooks/useDeleteData";

export default function DeleteButton({
  startLoading,
  id,
}: {
  startLoading: () => void;
  id: string | null;
}) {
  const router = useRouter();
  const { detail } = useTodoListStore((state) => state);
  const { deleteData } = useDeleteData();

  const handleDelete = async () => {
    if (!detail || !id) return;
    startLoading();
    await deleteData(id);
    router.push("/");
  };

  return (
    <button className="deleteButton shape_1" onClick={handleDelete}>
      <Image src="/svg/X.svg" alt="deleteButton" width="16" height="16" />
      삭제하기
    </button>
  );
}
