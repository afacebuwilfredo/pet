import type { Pet } from '../types/pet';

export const INITIAL_PET: Pet = {
  name: 'Buddy',
  species: 'Puppy',
  emoji: '🐶',
  level: 1,
  xp: 0,
  coins: 50,
  stats: {
    hunger: 62,
    happiness: 78,
    energy: 70,
    health: 90,
  },
};

export const XP_PER_ACTION = 8;
export const COINS_PER_ACTION = 3;
export const LEVEL_XP_THRESHOLD = 100;
