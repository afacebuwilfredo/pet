import { Pressable, StyleSheet, Text, ViewStyle } from 'react-native';
import { colors } from '../constants/colors';

type ActionButtonProps = {
  label: string;
  sublabel: string;
  backgroundColor: string;
  pressedColor: string;
  onPress: () => void;
  accessibilityHint?: string;
};

export const ActionButton = ({
  label,
  sublabel,
  backgroundColor,
  pressedColor,
  onPress,
  accessibilityHint,
}: ActionButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityHint={accessibilityHint}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: pressed ? pressedColor : backgroundColor } as ViewStyle,
        pressed && styles.pressed,
      ]}
    >
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.sublabel}>{sublabel}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    minHeight: 72,
    borderRadius: 18,
    paddingVertical: 14,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.shadow,
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  pressed: {
    transform: [{ scale: 0.98 }],
  },
  label: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '800',
  },
  sublabel: {
    marginTop: 2,
    color: 'rgba(255,255,255,0.85)',
    fontSize: 11,
    fontWeight: '600',
  },
});
