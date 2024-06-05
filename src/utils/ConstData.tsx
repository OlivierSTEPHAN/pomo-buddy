interface DurationData {
  duration: number;
  text: string;
  emoji: string;
}

const chill = import.meta.env.VITE_TIMING_CHILL
const work = import.meta.env.VITE_TIMING_WORK
const sleep = import.meta.env.VITE_TIMING_SLEEP

const data: DurationData[] = [
  {
    duration: work,
    text: "",
    emoji: "",
  },
  {
    duration: chill,
    text: "Allez, ptite pause",
    emoji: "😥",
  },
  {
    duration: work,
    text: "T'endors pas ça recommence",
    emoji: "💪",
  },
  {
    duration: chill,
    text: "Ptite biè.. café, c'est bien le café",
    emoji: "☕",
  },
  {
    duration: work,
    text: "Encore un effort",
    emoji: "🎯",
  },
  {
    duration: chill,
    text: "Une petite pause pour toi, un grand pas pour ton projet",
    emoji: "📈",
  },
  {
    duration: work,
    text: "T'en as plus pour longtemps",
    emoji: "⏲️",
  },
  {
    duration: sleep,
    text: "Jure c'est déjà terminé ? Grosse sieste maintenant",
    emoji: "🥳",
  },
];

export default data;
