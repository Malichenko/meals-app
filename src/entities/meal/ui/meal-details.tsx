import theme from "@shared/config/theme";
import { View, Text, StyleSheet } from "react-native";
import { MealModel } from "../model";
import { FC } from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

type Ptops = Pick<MealModel, "duration" | "complexity" | "affordability">;

export const MealDetails: FC<Ptops> = ({ duration, complexity, affordability }) => {
  return (
    <View style={styles.details}>
      <View style={styles.detailItem}>
        <FontAwesome6 name="clock" size={18} color={theme.palette.neutral[60]} />
        <Text style={styles.detailText}>{duration}m</Text>
      </View>

      <View style={styles.detailItem}>
        <FontAwesome6 name="bars-progress" size={18} color={theme.palette.neutral[60]} />
        <Text style={styles.detailText}>{complexity.toUpperCase()}</Text>
      </View>

      <View style={styles.detailItem}>
        <FontAwesome6 name="dollar-sign" size={18} color={theme.palette.neutral[60]} />
        <Text style={styles.detailText}>{affordability.toUpperCase()}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    gap: theme.spacing.x1,
  },
  detailText: {
    fontSize: theme.fontSize.sm,
    color: theme.palette.neutral[60],
  },
  detailItem: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing.x1,
  },
});
