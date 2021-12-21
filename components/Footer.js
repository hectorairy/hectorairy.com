import React from "react";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="flex flex-col items-center mt-16 mb-4 max-w-3xl w-11/12 mx-auto my-0">
        <p className="text-md text-center tracking-wide text-gray-400 mb-2">
          Héctor Airy @hectorairy • Todos los derechos reservados &copy; {year}.
        </p>

        <div className="mb-2 text-sm text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-sky-500 font-bold">
          ♤ The World Is Yours ♤
        </div>
        <div className="text-xs text-center tracking-wide text-gray-400">
          Desarrollado con{" "}
          <a
            className="mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-sky-500"
            href="https://nextjs.org/"
            target="_blank"
            rel="noreferrer"
          >
            NextJS
          </a>
        </div>
      </div>
    </footer>
  );
};
