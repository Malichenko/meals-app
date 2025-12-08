import { View, Text, StyleSheet } from "react-native";
import { FC } from "react";
import { MealDetails } from "@entities/meal";
import { MealModel } from "@entities/meal";
import theme from "@shared/config/theme";

interface Props {
  title: string;
  duration: number;
  complexity: MealModel["complexity"];
  affordability: MealModel["affordability"];
}

export const MealInfo: FC<Props> = ({ title, duration, complexity, affordability }) => {
  return (
    <View style={styles.info}>
      <Text style={styles.title}>{title}</Text>

      <MealDetails
        duration={duration}
        complexity={complexity}
        affordability={affordability}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  info: {
    gap: theme.spacing.x2,
    borderBottomWidth: 1,
    borderBottomColor: theme.palette.neutral[30],
    paddingVertical: theme.spacing.x3,
  },
  title: {
    fontSize: theme.fontSize["2xl"],
    fontWeight: "bold",
    textAlign: "center",
  },
});
