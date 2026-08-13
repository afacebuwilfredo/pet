import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ActionButton } from './components/ActionButton';
import { PetStage } from './components/PetStage';
import { StatBar } from './components/StatBar';
import { APP_NAME, APP_VERSION } from './constants/app';
import { colors } from './constants/colors';
import { LEVEL_XP_THRESHOLD } from './constants/pets';
import { usePet } from './hooks/usePet';

const HomeScreen = () => {
  const { pet, mood, moodLabel, message, handleFeed, handlePlay, handleSleep } = usePet();
  const xpPercent = Math.max(0, Math.min(100, (pet.xp / LEVEL_XP_THRESHOLD) * 100));

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <View style={styles.skyTop} />
      <View style={styles.skyBottom} />
      <View style={styles.grass} />

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.topBar}>
          <View>
            <Text style={styles.brand}>{APP_NAME}</Text>
            <Text style={styles.tagline}>Your little companion</Text>
          </View>
          <View style={styles.coinPill} accessibilityLabel={`${pet.coins} coins`}>
            <Text style={styles.coinText}>{pet.coins} 🪙</Text>
          </View>
        </View>

        <PetStage
          emoji={pet.emoji}
          name={pet.name}
          species={pet.species}
          moodLabel={moodLabel}
          mood={mood}
        />

        <View style={styles.panel}>
          <View style={styles.metaRow}>
            <Text style={styles.meta}>Lv {pet.level}</Text>
            <Text style={styles.meta}>
              XP {pet.xp}/{LEVEL_XP_THRESHOLD}
            </Text>
          </View>

          <View
            style={styles.xpTrack}
            accessibilityRole="progressbar"
            accessibilityLabel={`Experience ${pet.xp} of ${LEVEL_XP_THRESHOLD}`}
          >
            <View style={[styles.xpFill, { width: `${xpPercent}%` }]} />
          </View>

          <View style={styles.stats}>
            <StatBar label="Hunger" value={pet.stats.hunger} fillColor={colors.hunger} />
            <StatBar label="Happiness" value={pet.stats.happiness} fillColor={colors.happiness} />
            <StatBar label="Energy" value={pet.stats.energy} fillColor={colors.energy} />
            <StatBar label="Health" value={pet.stats.health} fillColor={colors.health} />
          </View>

          <Text style={styles.message} accessibilityLiveRegion="polite">
            {message}
          </Text>
        </View>

        <View style={styles.actions}>
          <ActionButton
            label="Feed"
            sublabel="Fill hunger"
            backgroundColor={colors.accent}
            pressedColor={colors.accentPressed}
            onPress={handleFeed}
            accessibilityHint="Feeds your pet a snack"
          />
          <ActionButton
            label="Play"
            sublabel="Boost joy"
            backgroundColor={colors.play}
            pressedColor={colors.playPressed}
            onPress={handlePlay}
            accessibilityHint="Plays with your pet"
          />
          <ActionButton
            label="Sleep"
            sublabel="Restore energy"
            backgroundColor={colors.sleep}
            pressedColor={colors.sleepPressed}
            onPress={handleSleep}
            accessibilityHint="Lets your pet take a nap"
          />
        </View>

        <Text style={styles.version} accessibilityLabel={`App version ${APP_VERSION}`}>
          v{APP_VERSION}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.skyBottom,
  },
  skyTop: {
    ...StyleSheet.absoluteFill,
    backgroundColor: colors.skyTop,
    height: '55%',
  },
  skyBottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '55%',
    backgroundColor: colors.skyBottom,
  },
  grass: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 18,
    backgroundColor: colors.grass,
    opacity: 0.35,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 28,
    gap: 18,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brand: {
    fontSize: 26,
    fontWeight: '900',
    color: colors.ink,
    letterSpacing: -0.6,
  },
  tagline: {
    marginTop: 2,
    fontSize: 13,
    fontWeight: '600',
    color: colors.inkMuted,
  },
  coinPill: {
    backgroundColor: colors.panel,
    borderColor: colors.panelBorder,
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  coinText: {
    color: colors.ink,
    fontWeight: '700',
    fontSize: 14,
  },
  panel: {
    backgroundColor: colors.panel,
    borderColor: colors.panelBorder,
    borderWidth: 1,
    borderRadius: 24,
    padding: 18,
    gap: 16,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  meta: {
    color: colors.inkMuted,
    fontWeight: '700',
    fontSize: 13,
  },
  xpTrack: {
    height: 8,
    borderRadius: 999,
    backgroundColor: colors.barTrack,
    overflow: 'hidden',
    marginTop: -6,
  },
  xpFill: {
    height: '100%',
    borderRadius: 999,
    backgroundColor: colors.play,
  },
  stats: {
    gap: 12,
  },
  message: {
    color: colors.ink,
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 22,
  },
  actions: {
    flexDirection: 'row',
    gap: 10,
  },
  version: {
    textAlign: 'center',
    color: colors.inkMuted,
    fontSize: 12,
    fontWeight: '600',
    opacity: 0.75,
  },
});
