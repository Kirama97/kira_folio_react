import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Main from './../composants/Main'
import { usekiraContext } from '../Hook/use_kira'

const Detail_projet = () => {
  const { projets } = usekiraContext()
  const { id } = useParams()

  const projet = projets.find((p) => p.id == id)

  if (!projet) {
    return (
      <Main>
        <h1 className="text-white text-center text-2xl">
          Projet introuvable
        </h1>
      </Main>
    )
  }

  return (
    <Main>

      {/* HERO IMAGE */}
      <div className="relative w-full h-[60vh] rounded-2xl overflow-hidden shadow-2xl">
        <img
          src={projet.image}
          alt={projet.title}
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 flex items-end">
          <div className="p-6 md:p-10">
            <span className="inline-block mb-3 px-4 py-1 text-sm rounded-full
                             bg-indigo-600 text-white">
              {projet.type}
            </span>

            <h1 className="text-white text-3xl md:text-5xl font-bold">
              {projet.title}
            </h1>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-3 gap-10">

        {/* DESCRIPTION */}
        <div className="md:col-span-2 bg-white/10 backdrop-blur-md
                        rounded-2xl p-6 text-white shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">À propos du projet</h2>
          <p className="text-gray-200 leading-relaxed">
            {projet.description || "Description du projet à venir."}
          </p>
        </div>

        {/* INFOS */}
        <div className="bg-white/10 backdrop-blur-md
                        rounded-2xl p-6 text-white shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Informations</h2>

          <ul className="space-y-3 text-sm">
            <li>
              <span className="text-gray-400">Catégorie :</span>{' '}
              <span className="font-medium">{projet.type}</span>
            </li>
            <li>
              <span className="text-gray-400">Technos :</span>{' '}
              <span className="font-medium">
                {projet.tech?.join(', ') || 'React, Tailwind'}
              </span>
            </li>
            <li>
              <span className="text-gray-400">Année :</span>{' '}
              <span className="font-medium">{projet.year || '2025'}</span>
            </li>
          </ul>

          {/* ACTIONS */}
          <div className="mt-6 flex flex-col gap-3">
            {projet.demo && (
              <a
                href={projet.demo}
                target="_blank"
                rel="noreferrer"
                className="text-center py-2 rounded-full
                           bg-indigo-600 hover:bg-indigo-700 transition"
              >
                Voir le projet
              </a>
            )}

            {projet.github && (
              <a
                href={projet.github}
                target="_blank"
                rel="noreferrer"
                className="text-center py-2 rounded-full
                           border border-white/30 hover:bg-white/10 transition"
              >
                Code source
              </a>
            )}

            <Link
              to="/"
              className="text-center text-sm text-gray-300 hover:text-white mt-2"
            >
              ← Retour aux projets
            </Link>
          </div>
        </div>

      </div>
    </Main>
  )
}

export default Detail_projet
