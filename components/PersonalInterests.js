import React from "react";
import { FcFlashOn } from "react-icons/fc";
export const PersonalInterests = () => {
  return (
    <ul className="bg-white ">
      <li className="grid grid-cols-10 gap-4 justify-center items-center px-4 py-2 ">
        <div className="flex justify-center items-center">
          <FcFlashOn size={30} />
        </div>
        <div className="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-green-400">
          <p className=" text-gray-600">
            En mi tiempo libre, además de formarme en desarrollo web, también me
            gusta aprender sobre data science y blockchain.
          </p>
        </div>
      </li>
      <li className="grid grid-cols-10 gap-4 justify-center items-center px-4 py-2 ">
        <div className="flex justify-center items-center">
          <FcFlashOn size={30} />
        </div>
        <div className="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-sky-500">
          <p className=" text-gray-600">
            Me gusta mucho leer, de cualquier tipo de temas. Una de las cosas
            que siempre he querido hacer es escribir un libro. Quizá algún
            día...
          </p>
        </div>
      </li>
      <li className="grid grid-cols-10 gap-4 justify-center items-center px-4 py-2 ">
        <div className="flex justify-center items-center">
          <FcFlashOn size={30} />
        </div>
        <div className="col-start-2 col-end-11 pl-8 border-l-2 border-solid border-green-400">
          <p className=" text-gray-600">
            Hace poco regresé a entrenar artes marciales (después de muchos años
            de nada), actualmente soy cinta amarilla en lima lama, y pronto iré
            por la naranja.
          </p>
        </div>
      </li>
    </ul>
  );
};
