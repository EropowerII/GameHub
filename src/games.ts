export type Subject = "Language" | "Math";

export type Game = {
  id: string;
  title: string;
  subject: Subject;
  skill: string;
  difficulty: "Beginner" | "Intermediate";
  description: string;
  playUrl: string;
  accent: "sun" | "leaf";
};

export const games: Game[] = [
  {
    id: "mago-palabra",
    title: "MagoPalabra",
    subject: "Language",
    skill: "Vocabulary and word recognition",
    difficulty: "Beginner",
    description:
      "A word-powered adventure where learners practice reading clues, finding patterns, and building confidence with language.",
    playUrl: "https://eropo.github.io/MagoPalabra/",
    accent: "sun",
  },
  {
    id: "matheosaurus",
    title: "Matheosaurus",
    subject: "Math",
    skill: "Number sense and arithmetic",
    difficulty: "Intermediate",
    description:
      "A dino-sized math challenge for practicing quick thinking, operations, and problem solving in short playful rounds.",
    playUrl: "https://eropo.github.io/Matheosaurus/",
    accent: "leaf",
  },
];

export const subjects = ["All", ...new Set(games.map((game) => game.subject))] as const;

export type SubjectFilter = (typeof subjects)[number];
