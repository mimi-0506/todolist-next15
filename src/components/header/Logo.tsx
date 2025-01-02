"use client";

export default function Logo() {
  const handleRedirect = () => {
    window.location.href = "/";
  };

  return (
    <div className="logoContainer">
      <button onClick={handleRedirect}>
        <picture>
          <source srcSet="/svg/logo/small.svg" media="(max-width: 375px)" />
          <img src="/svg/logo/big.svg" alt="logo" />
        </picture>
      </button>
    </div>
  );
}
