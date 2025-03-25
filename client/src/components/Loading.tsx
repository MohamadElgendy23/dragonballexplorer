import React from "react";

interface LoadingProps {
  type: string;
}

function Loading({ type }: LoadingProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-3 z-1 text-white">
      <h2 className="text-2xl">{`Scroll down to view ${type}`}</h2>
      <i className="text-xl fa-solid fa-down-long"></i>
      <i className="text-xl fa-solid fa-spinner animate-spin"></i>
    </div>
  );
}

export default Loading;
