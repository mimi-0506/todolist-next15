"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useTodoListStore } from "@/providers/store-provider";
import useSetImage from "@/hooks/useSetImage";
import { ButtonLoading } from "../common/Loading";

export default function DetailImage() {
  const { detail, setDetail } = useTodoListStore((state) => state);
  const { setImage } = useSetImage();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    if (error !== "") alert(error);
  }, [error]);

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLoading(true);
    const file = event.target.files?.[0];

    if (!file) {
      setLoading(false);
      return;
    }

    const fileNameRegex = /^[a-zA-Z0-9._-]+$/;
    if (!fileNameRegex.test(file.name)) {
      setError("영어로 된 파일만 선택하여 주십시오.");
      return;
    }

    const maxSizeInBytes = 5 * 1024 * 1024;
    if (file.size > maxSizeInBytes) {
      setError("파일 크기 5MB 이하만 가능합니다.");
      return;
    }

    const imageUrl = await setImage(file);
    setDetail({ ...detail, imageUrl: imageUrl });

    setError("");
    setLoading(false);
  };

  const handleAddImage = () => {
    if (!loading) imageRef.current?.click();
  };

  return (
    <div className="imageContainer">
      {detail?.imageUrl ? (
        <Image src={detail.imageUrl} alt="detailImage" fill />
      ) : (
        <Image src="/svg/empty.svg" alt="emptyImage" width="64" height="64" />
      )}

      <button
        className={detail?.imageUrl ? "edit" : ""}
        onClick={handleAddImage}
      >
        {loading ? (
          <ButtonLoading />
        ) : (
          <Image
            src={detail?.imageUrl ? "/svg/edit.svg" : "/svg/plus.svg"}
            alt="editButton"
            width="24"
            height="24"
          />
        )}

        <input
          ref={imageRef}
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageUpload}
        />
      </button>
    </div>
  );
}
