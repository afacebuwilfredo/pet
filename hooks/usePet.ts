import { useMemo, useState } from 'react';
import {
  COINS_PER_ACTION,
  INITIAL_PET,
  LEVEL_XP_THRESHOLD,
  XP_PER_ACTION,
} from '../constants/pets';
import type { Pet, PetAction, PetMood } from '../types/pet';

const clamp = (value: number): number => Math.max(0, Math.min(100, value));

const getMood = (pet: Pet): PetMood => {
  const { hunger, happiness, energy } = pet.stats;

  if (hunger < 25) return 'hungry';
  if (energy < 25) return 'sleepy';
  if (happiness >= 85 && hunger >= 60 && energy >= 55) return 'ecstatic';
  if (happiness >= 65) return 'happy';
  if (energy < 40) return 'tired';
  return 'okay';
};

const getMoodLabel = (mood: PetMood): string => {
  switch (mood) {
    case 'ecstatic':
      return 'Ecstatic!';
    case 'happy':
      return 'Happy!';
    case 'okay':
      return 'Okay';
    case 'tired':
      return 'Tired';
    case 'hungry':
      return 'Hungry';
    case 'sleepy':
      return 'Sleepy';
    default:
      return 'Okay';
  }
};

const applyRewards = (pet: Pet): Pet => {
  const nextXp = pet.xp + XP_PER_ACTION;
  const leveledUp = nextXp >= LEVEL_XP_THRESHOLD;

  return {
    ...pet,
    xp: leveledUp ? nextXp - LEVEL_XP_THRESHOLD : nextXp,
    level: leveledUp ? pet.level + 1 : pet.level,
    coins: pet.coins + COINS_PER_ACTION,
  };
};

const applyAction = (
  current: Pet,
  action: PetAction,
): { pet: Pet; message: string } => {
  const stats = { ...current.stats };

  if (action === 'feed') {
    if (stats.hunger >= 95) {
      return {
        pet: current,
        message: `${current.name} is already full!`,
      };
    }

    stats.hunger = clamp(stats.hunger + 22);
    stats.happiness = clamp(stats.happiness + 8);
    stats.health = clamp(stats.health + 4);

    return {
      pet: applyRewards({ ...current, stats }),
      message: `${current.name} loved the snack! +${XP_PER_ACTION} XP`,
    };
  }

  if (action === 'play') {
    if (stats.energy < 15) {
      return {
        pet: current,
        message: `${current.name} is too tired to play.`,
      };
    }

    stats.happiness = clamp(stats.happiness + 18);
    stats.energy = clamp(stats.energy - 16);
    stats.hunger = clamp(stats.hunger - 10);

    return {
      pet: applyRewards({ ...current, stats }),
      message: `${current.name} had a blast playing! +${XP_PER_ACTION} XP`,
    };
  }

  if (stats.energy >= 95) {
    return {
      pet: current,
      message: `${current.name} is already wide awake!`,
    };
  }

  stats.energy = clamp(stats.energy + 28);
  stats.health = clamp(stats.health + 10);
  stats.hunger = clamp(stats.hunger - 8);

  return {
    pet: applyRewards({ ...current, stats }),
    message: `${current.name} took a cozy nap. +${XP_PER_ACTION} XP`,
  };
};

export const usePet = () => {
  const [pet, setPet] = useState<Pet>(INITIAL_PET);
  const [message, setMessage] = useState('Your pet is ready to hang out!');

  const mood = useMemo(() => getMood(pet), [pet]);
  const moodLabel = useMemo(() => getMoodLabel(mood), [mood]);

  const handleAction = (action: PetAction) => {
    const result = applyAction(pet, action);
    setPet(result.pet);
    setMessage(result.message);
  };

  return {
    pet,
    mood,
    moodLabel,
    message,
    handleFeed: () => handleAction('feed'),
    handlePlay: () => handleAction('play'),
    handleSleep: () => handleAction('sleep'),
  };
};
