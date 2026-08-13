import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ActionButton } from './components/ActionButton';
import { PetStage } from './components/PetStage';
import { StatBar } from './components/StatBar';
import { colors } from './constants/colors';
import { LEVEL_XP_THRESHOLD } from './constants/pets';
import { usePet } from './hooks/usePet';

const HomeScreen = () => {
  const { pet, mood, moodLabel, message, handleFeed, handlePlay, handleSleep } = usePet();

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="dark" />
      <View style={styles.skyTop} />
      <View style={styles.skyBottom} />

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.topBar}>
          <Text style={styles.brand}>Life Buddy</Text>
          <View style={styles.coinPill} accessibilityLabel={`${pet.coins} coins`}>
            <Text style={styles.coinText}>{pet.coins} coins</Text>
          </View>
        </View>

        <PetStage emoji={pet.emoji} name={pet.name} moodLabel={moodLabel} mood={mood} />

        <View style={styles.panel}>
          <View style={styles.metaRow}>
            <Text style={styles.meta}>Lv {pet.level}</Text>
            <Text style={styles.meta}>
              XP {pet.xp}/{LEVEL_XP_THRESHOLD}
            </Text>
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
});
