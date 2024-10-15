import React from "react";

export const Footer = () => {
  return (
    <div className="h-fit w-full relative left-0 bottom-0 flex justify-center items-center p-2">
      <div className="flex flex-col w-full h-fit justify-center items-center">
        <hr className="border-cyan-500 border-1 h-full w-full rounded-lg" />
        <p className="text-neutral-400">
          &#169; 2024, created by Halmosi Kornél
        </p>
      </div>
    </div>
  );
};
