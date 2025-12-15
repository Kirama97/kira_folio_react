import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


export default function RotateAnnime({
  lines = ["Développeur", "Infographe", "Formateur"],
  speed = 80,
  pause = 1500,
}) {
  const [index, setIndex] = useState(0); // ligne active
  const [subIndex, setSubIndex] = useState(0); // caractère actif
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index >= lines.length) {
      setIndex(0);
      return;
    }

    if (!deleting && subIndex === lines[index].length) {
      // pause avant supprimer
      const timeout = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timeout);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % lines.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, lines, speed, pause]);

  return (
    <section className="w-full  text-white">
      <div className=" py-5 flex flex-col max-md:items-center  gap-4">
      
          <h1 className="text-xl md:text-5xl font-extrabold leading-tight">
            Je suis <span className="sr-only">:</span>
            <span aria-hidden="false" className="inline-block ml-2">
              <span className="mr-2">{lines[index].slice(0, subIndex)}</span>
              <span
                className="inline-block w-1 h-8 align-middle bg-white/90 animate-blink"
                aria-hidden="true"
              />
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl max-md:text-center text-white/90 max-w-2xl">
            Créez des expériences web élégantes et performantes — portfolio,
            landing pages, et applications React + Tailwind.
          </p>

          <div className="mt-10 mb-10 flex gap-4">
            <NavLink
              to="/contact"
              className="inline-block bg-white text-indigo-700 font-semibold px-5 py-3 rounded-lg shadow hover:scale-105 transition"
              href="#contact"
            >
              Me contacter
            </NavLink>
            <NavLink
             
              to="/projets"
              className="inline-block text-white/90 border border-white/20 px-5 py-3 rounded-lg hover:bg-white/10 transition"
              href="#projets"
            >
              Mes projets
            </NavLink>
          </div>
       

     
      </div>
    </section>
  );
}
