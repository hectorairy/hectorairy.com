import React from "react";
import { TextGradient } from "./TextGradient";

export const SocialLink = ({ link, icon, social }) => {
  return (
    <a href={link} target={"_blank"} rel="noreferrer">
      <div class="mb-5 flex justify-center items-center bg-white p-4 border-b-[1px] border-sky-500">
        {icon}
        <TextGradient>
          <span>{social}</span>
        </TextGradient>
      </div>
    </a>
  );
};
