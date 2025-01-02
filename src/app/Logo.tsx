"use client";
import Image from "next/image";
export default function Logo() {
  const handleRedirect = () => {
    window.location.href = "/";
  };

  return (
    <button onClick={handleRedirect}>
      <Image src={"/svg/logo/big.svg"} alt={"logo"} width={100} height={100} />
    </button>
  );
}
