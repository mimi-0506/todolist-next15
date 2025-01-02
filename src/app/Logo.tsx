"use client";
import Image from "next/image";
export default function Logo() {
  const handleRedirect = () => {
    window.location.href = "/";
  };

  return (
    <div className="dynamicWidth">
      <button onClick={handleRedirect}>
        <picture>
          <source srcSet="/svg/logo/small.svg" media="(max-width: 375px)" />
          <img src="/svg/logo/big.svg" alt="Responsive" />
        </picture>
      </button>
    </div>
  );
}
