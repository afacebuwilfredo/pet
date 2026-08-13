import { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/colors';
import type { PetMood } from '../types/pet';

type PetStageProps = {
  emoji: string;
  name: string;
  moodLabel: string;
  mood: PetMood;
};

export const PetStage = ({ emoji, name, moodLabel, mood }: PetStageProps) => {
  const bounce = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const idle = Animated.loop(
      Animated.sequence([
        Animated.timing(bounce, { toValue: -8, duration: 900, useNativeDriver: true }),
        Animated.timing(bounce, { toValue: 0, duration: 900, useNativeDriver: true }),
      ]),
    );
    idle.start();
    return () => idle.stop();
  }, [bounce]);

  useEffect(() => {
    Animated.sequence([
      Animated.timing(scale, { toValue: 1.08, duration: 160, useNativeDriver: true }),
      Animated.timing(scale, { toValue: 1, duration: 180, useNativeDriver: true }),
    ]).start();
  }, [mood, scale]);

  return (
    <View style={styles.stage} accessibilityLabel={`${name}, mood ${moodLabel}`}>
      <View style={styles.halo} />
      <Animated.Text
        style={[
          styles.emoji,
          {
            transform: [{ translateY: bounce }, { scale }],
          },
        ]}
      >
        {emoji}
      </Animated.Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.mood}>{moodLabel}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  stage: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 220,
  },
  halo: {
    position: 'absolute',
    width: 180,
    height: 180,
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.45)',
  },
  emoji: {
    fontSize: 104,
    lineHeight: 120,
  },
  name: {
    marginTop: 4,
    fontSize: 28,
    fontWeight: '800',
    color: colors.ink,
    letterSpacing: -0.4,
  },
  mood: {
    marginTop: 4,
    fontSize: 16,
    fontWeight: '600',
    color: colors.inkMuted,
  },
});
