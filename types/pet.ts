export type PetMood = 'ecstatic' | 'happy' | 'okay' | 'tired' | 'hungry' | 'sleepy';

export type PetAction = 'feed' | 'play' | 'sleep';

export type PetStats = {
  hunger: number;
  happiness: number;
  energy: number;
  health: number;
};

export type Pet = {
  name: string;
  species: string;
  emoji: string;
  level: number;
  xp: number;
  coins: number;
  stats: PetStats;
};

export type ActionResult = {
  message: string;
  mood: PetMood;
};
