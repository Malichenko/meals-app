import { Pressable, StyleSheet, Animated } from "react-native";
import { FC, useRef, ReactNode } from "react";
import { Ionicons } from "@expo/vector-icons";
import theme from "@shared/config/theme";

interface Props {
  icon: keyof typeof Ionicons.glyphMap;
  onPress: () => void;
  size?: number;
  color?: string;
  animated?: boolean;
  children?: ReactNode;
}

export const IconButton: FC<Props> = ({
  icon,
  onPress,
  size = 22,
  color = theme.palette.neutral[10],
  animated = true,
  children,
}) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    if (animated) {
      Animated.spring(scaleAnim, {
        toValue: 0.85,
        useNativeDriver: true,
        tension: 300,
        friction: 10,
      }).start();
    }
  };

  const handlePressOut = () => {
    if (animated) {
      Animated.spring(scaleAnim, {
        toValue: 1,
        useNativeDriver: true,
        tension: 300,
        friction: 10,
      }).start();
    }
  };

  const handlePress = () => {
    if (animated && icon === "heart") {
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.3,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }),
      ]).start();
    }
    onPress();
  };

  const combinedScale =
    icon === "heart" && animated
      ? Animated.multiply(scaleAnim, pulseAnim)
      : scaleAnim;

  return (
    <Pressable
      onPress={handlePress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={styles.container}
    >
      <Animated.View
        style={[
          styles.iconContainer,
          {
            transform: [{ scale: combinedScale }],
          },
        ]}
      >
        {children || <Ionicons name={icon} size={size} color={color} />}
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: theme.spacing.x8,
    width: theme.spacing.x8,
    borderRadius: theme.spacing.x2,
  },
  iconContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
