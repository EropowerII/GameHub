export type Subject = "Lenguaje" | "Matemáticas";

export type Game = {
  id: string;
  title: string;
  subject: Subject;
  skill: string;
  difficulty: "Inicial" | "Intermedio";
  description: string;
  playUrl: string;
  accent: "sun" | "leaf";
};

export const games: Game[] = [
  {
    id: "mago-palabra",
    title: "MagoPalabra",
    subject: "Lenguaje",
    skill: "Vocabulario y reconocimiento de palabras",
    difficulty: "Inicial",
    description:
      "Una aventura de palabras donde los estudiantes leen pistas, descubren patrones y ganan confianza con el lenguaje.",
    playUrl: "https://eropowerii.github.io/MagoPalabra/",
    accent: "sun",
  },
  {
    id: "matheosaurus",
    title: "Matheosaurus",
    subject: "Matemáticas",
    skill: "Sentido numérico y aritmética",
    difficulty: "Intermedio",
    description:
      "Un reto matemático de tamaño jurásico para practicar operaciones, cálculo mental y resolución de problemas en rondas cortas.",
    playUrl: "https://eropowerii.github.io/Matheosaurus/",
    accent: "leaf",
  },
];

export const subjects = ["Todos", ...new Set(games.map((game) => game.subject))] as const;

export type SubjectFilter = (typeof subjects)[number];
