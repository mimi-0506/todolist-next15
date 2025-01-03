import Image from "next/image";

export const ButtonLoading = () => {
  return (
    <div className="buttonLoadingContainer">
      <Image src="/svg/loading.svg" alt="Responsive" width="32" height="32" />
    </div>
  );
};

export const AreaLoading = () => {
  return (
    <div className="areaLoadingContainer">
      <Image src="/svg/loading.svg" alt="Responsive" width="100" height="100" />
    </div>
  );
};
