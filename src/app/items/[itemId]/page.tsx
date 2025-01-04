"use client";

import "@/styles/detail.css";
import useGetDetailData from "@/hooks/useGetDetailData";
import { useEffect, useRef, useState } from "react";
import { AreaLoading, FullLoading } from "@/components/common/Loading";
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
          <div className="main">
          </div>
          <div className="buttonContainer">
          </div>
        </>
      ) : (
        <AreaLoading />
      )}
    </div>
  );
}
