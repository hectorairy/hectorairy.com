import React from "react";

export const TextGradient = ({ children, size, pb = "pb-0" }) => {
  return (
    <div
      className={`${size} ${pb} font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-sky-500 lg:text-center`}
    >
      {children}
    </div>
  );
};
