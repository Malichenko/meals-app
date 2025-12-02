import { Text, StyleSheet } from "react-native";
import { FC, PropsWithChildren } from "react";
import theme from "@shared/config/theme";

export const RecipeSectionTitle: FC<PropsWithChildren> = ({ children }) => {
  return <Text style={styles.recipeTitle}>{children}</Text>;
};

const styles = StyleSheet.create({
  recipeTitle: {
    fontSize: theme.fontSize.lg,
    fontWeight: "bold",
    marginBottom: theme.spacing.x2,
    color: theme.palette.primary[60],
  },
});
