import React from "react";
import { TextGradient } from "./TextGradient";

export const SocialLink = ({ link, icon, social, border }) => {
  return (
    <a href={link} target={"_blank"} rel="noreferrer">
      <div
        className={`mb-5 flex justify-center items-center bg-white p-4 ${border} border-sky-500`}
      >
        {icon}
        <TextGradient>
          <span>{social}</span>
        </TextGradient>
      </div>
    </a>
  );
};
