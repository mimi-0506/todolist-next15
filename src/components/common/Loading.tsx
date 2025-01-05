import Image from "next/image";

export const ButtonLoading = () => {
  return (
    <div className="buttonLoadingContainer">
      <Image src="/svg/loading.svg" alt="loading" width="32" height="32" />
    </div>
  );
};

export const AreaLoading = () => {
  return (
    <div className="areaLoadingContainer">
      <Image src="/svg/loading.svg" alt="loading" width="100" height="100" />
    </div>
  );
};

export const FullLoading = () => {
  return (
    <div className="fullLoadingContainer">
      <Image src="/svg/loading.svg" alt="loading" width="200" height="200" />
    </div>
  );
};
