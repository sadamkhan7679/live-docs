import React from "react";
import Image from "next/image";

type LoaderProps = {};

const Loader: React.FC<LoaderProps> = () => {
  return (
    <div className="loader">
      <Image
        src="/assets/icons/loader.svg"
        alt="loader"
        width={32}
        height={32}
        className="animate-spin"
      />
      Loading...
    </div>
  );
};

export default Loader;
