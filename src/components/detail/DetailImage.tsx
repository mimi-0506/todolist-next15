"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useTodoListStore } from "@/providers/store-provider";
import useSetImage from "@/hooks/useSetImage";
import { AreaLoading } from "../common/Loading";

export default function DetailImage() {
  const { detail, setDetail } = useTodoListStore((state) => state);
  const { setImage } = useSetImage();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const imageRef = useRef(null);

  const reader = new FileReader();

  useEffect(() => {
    if (error !== "") alert(error);
  }, [error]);

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLoading(true);
    const file = event.target.files?.[0];

    if (!file) return;

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
    console.log(imageUrl);
    setDetail({ ...detail, imageUrl: imageUrl });

    setError("");
  };

  const handleAddImage = () => {
    imageRef.current?.click();
  };

  return (
    <div className="imageContainer">
      {detail?.imageUrl ? (
        <Image src={detail.imageUrl} alt="Responsive" fill />
      ) : (
        <Image src="/svg/empty.svg" alt="Responsive" width="64" height="64" />
      )}

      {loading ? (
        <AreaLoading />
      ) : (
        <button
          className={detail?.imageUrl ? "edit" : ""}
          onClick={handleAddImage}
        >
          <Image
            src={detail?.imageUrl ? "/svg/edit.svg" : "/svg/plus.svg"}
            alt="Responsive"
            width="24"
            height="24"
          />

          <input
            ref={imageRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
        </button>
      )}
    </div>
  );
}
