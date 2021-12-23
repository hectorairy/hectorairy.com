import React from "react";

export const Subtitle = ({ children }) => {
  return (
    <h2 className="text-2xl font-semibold pb-2 flex items-center">
      {children}
    </h2>
  );
};
