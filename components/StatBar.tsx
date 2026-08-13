import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/colors';

type StatBarProps = {
  label: string;
  value: number;
  fillColor: string;
};

export const StatBar = ({ label, value, fillColor }: StatBarProps) => {
  const safeValue = Math.max(0, Math.min(100, value));

  return (
    <View style={styles.wrap} accessibilityRole="progressbar" accessibilityLabel={`${label} ${safeValue} percent`}>
      <View style={styles.row}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{safeValue}</Text>
      </View>
      <View style={styles.track}>
        <View style={[styles.fill, { width: `${safeValue}%`, backgroundColor: fillColor }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    gap: 6,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    color: colors.inkMuted,
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
  value: {
    color: colors.ink,
    fontSize: 13,
    fontWeight: '700',
  },
  track: {
    height: 10,
    borderRadius: 999,
    backgroundColor: colors.barTrack,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    borderRadius: 999,
  },
});
