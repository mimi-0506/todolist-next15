"use client";

import Image from "next/image";
import "@/styles/detail.css";
import useDataStateModify from "@/hooks/useDataStateModify";
import useGetDetailData from "@/hooks/useGetDetailData";
import { useEffect, useState } from "react";
import { AreaLoading } from "@/components/Loading";
import { modifyData } from "@/types/types";

export default function Item({
  params,
}: {
  params: Promise<{ itemId: string }>;
}) {
  const [data, setData] = useState<null | modifyData>(null);
  const { getDetailData } = useGetDetailData();
  const { modifyState } = useDataStateModify();

  useEffect(() => {
    getDatas();
  }, []);

  const getDatas = async () => {
    const { itemId } = await params;
    const nowData = await getDetailData(itemId);
    setData(nowData);
  };

  return (
    <div className="detailContainer dynamic">
      {data ? (
        <>
          <div className={`${data.isCompleted ? "doneBackground" : ""} title`}>
            <Image
              src={data.isCompleted ? "/svg/done.svg" : "/svg/todo.svg"}
              alt="Responsive"
              width="32"
              height="32"
            />
            <p>{data.name}</p>
          </div>
          <div className="main">
            <div className="imageContainer">
              <Image
                src={data.imageUrl ? data.imageUrl : "/svg/empty.svg"}
                alt="Responsive"
                width="64"
                height="64"
              />

              <button>
                <Image
                  src={data.imageUrl ? "/svg/edit.svg" : "/svg/plus.svg"}
                  alt="Responsive"
                  width="24"
                  height="24"
                />
              </button>
            </div>

            <div className="textContainer">
              <h2>Memo</h2>
              <p>{data?.memo}</p>
            </div>
          </div>
          <div className="buttonContainer">
            <button className="modifyButton shape_1">
              <Image
                src="/svg/check.svg"
                alt="Responsive"
                width="16"
                height="16"
              />
              수정 완료
            </button>

            <button className="deleteButton shape_1">
              <Image src="/svg/X.svg" alt="Responsive" width="16" height="16" />
              삭제하기
            </button>
          </div>
        </>
      ) : (
        <AreaLoading />
      )}
    </div>
  );
}
