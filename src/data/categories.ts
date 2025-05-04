
export interface Category {
  id: string;
  name: string;
  emoji: string;
  color: string;
  locked: boolean;
  description: string;
}

export const categories: Category[] = [
  {
    id: "funny",
    name: "Funny",
    emoji: "😂",
    color: "bg-funny",
    locked: false,
    description: "Make them laugh with these hilarious lines"
  },
  {
    id: "hot",
    name: "Hot",
    emoji: "🔥",
    color: "bg-hot",
    locked: true,
    description: "Spicy lines to turn up the heat"
  },
  {
    id: "cute",
    name: "Cute",
    emoji: "❤️",
    color: "bg-cute",
    locked: false,
    description: "Sweet lines that melt hearts"
  },
  {
    id: "savage",
    name: "Savage",
    emoji: "🗡️",
    color: "bg-savage",
    locked: false,
    description: "Bold lines for the fearless flirter"
  },
  {
    id: "cheesy",
    name: "Cheesy",
    emoji: "🧀",
    color: "bg-cheesy",
    locked: false,
    description: "So cheesy they might just work"
  },
  {
    id: "hookup",
    name: "Hookup",
    emoji: "😏",
    color: "bg-hookup",
    locked: true,
    description: "Direct lines for those special moments"
  },
  {
    id: "love",
    name: "Love",
    emoji: "💌",
    color: "bg-love",
    locked: false,
    description: "Romantic lines for deeper connections"
  },
  {
    id: "instagram",
    name: "Instagram",
    emoji: "🎬",
    color: "bg-instagram",
    locked: false,
    description: "Perfect captions for your posts"
  },
  {
    id: "genz",
    name: "Gen-Z",
    emoji: "🤙",
    color: "bg-genz",
    locked: true,
    description: "Internet meme-inspired pickup lines"
  }
];
