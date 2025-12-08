import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { FC, PropsWithChildren } from "react";
import theme from "@shared/config/theme";

interface Props {
  style?: StyleProp<ViewStyle>;
}

export const RecipeSection: FC<PropsWithChildren<Props>> = ({ children, style }) => {
  return <View style={[styles.recipeItem, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  recipeItem: {
    gap: theme.spacing.x1,
    marginBottom: theme.spacing.x2,
  },
});
