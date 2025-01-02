"use client";

import "@/styles/detail.css";
import "@/styles/components.css";
import useGetDetailData from "@/hooks/useGetDetailData";
import { useEffect, useState } from "react";
import { AreaLoading, FullLoading } from "@/components/common/Loading";
import Name from "@/components/detail/Name";
import DetailImage from "@/components/detail/DetailImage";
import Memo from "@/components/detail/Memo";
import ModifyButton from "@/components/detail/ModifyButton";
import DeleteButton from "@/components/detail/DeleteButton";
import { useTodoListStore } from "@/providers/store-provider";

export default function Item({
  params,
}: {
  params: Promise<{ itemId: string }>;
}) {
  const { detail, setDetail } = useTodoListStore((state) => state);

  const [id, setId] = useState<null | string>(null);

  const [loading, setLoading] = useState(false);
  const { getDetailData } = useGetDetailData();

  useEffect(() => {
    getDatas();
  }, []);

  const getDatas = async () => {
    if (id) {
      const nowData = await getDetailData(id);
      setDetail(nowData);
    } else {
      const { itemId } = await params;
      const nowData = await getDetailData(itemId);
      setDetail(nowData);
      setId(itemId);
    }
  };

  const startLoading = () => {
    setLoading(true);
  };

  return (
    <div className="detailContainer dynamic">
      {loading ? <FullLoading /> : <></>}

      {detail ? (
        <>
          <Name />
          <div className="main">
            <DetailImage />
            <Memo />
          </div>
          <div className="buttonContainer">
            <ModifyButton startLoading={startLoading} id={id} />
            <DeleteButton startLoading={startLoading} id={id} />
          </div>
        </>
      ) : (
        <AreaLoading />
      )}
    </div>
  );
}
