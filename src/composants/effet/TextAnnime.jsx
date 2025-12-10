import React, { useEffect, useState } from "react";

/**
 * TextAnnime
 * props:
 *  - words: array de mots/phrases
 *  - interval: ms avant de passer au mot suivant (défaut 2500)
 */
export default function TextAnnime({ words = ["Créatif", "Rapide", "Accessible"], interval = 2500 }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(t);
  }, [words.length, interval]);

  return (
    <header className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
      <div className="max-w-6xl mx-auto px-6 py-28">
        <h2 className="text-3xl md:text-5xl font-bold">
          Construisons ensemble <span className="inline-block ml-3 relative h-12">
            {words.map((w, i) => (
              <span
                key={i}
                className={`absolute left-0 top-0 w-full transition-transform transition-opacity duration-700 ease-out transform ${
                  i === idx ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
                }`}
                aria-hidden={i === idx ? "false" : "true"}
              >
                <span className="px-2 py-1 rounded-md bg-white/10">{w}</span>
              </span>
            ))}
          </span>
        </h2>
        <p className="mt-6 text-white/90 max-w-2xl">
          Agence freelance — création de sites modernes, rapides et faciles à maintenir.
        </p>
      </div>
    </header>
  );
}
