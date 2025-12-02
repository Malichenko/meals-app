import { View, Text, StyleSheet } from "react-native";
import { FC } from "react";
import theme from "@shared/config/theme";

interface Props {
  text: string;
}

export const RecipeListItem: FC<Props> = ({ text }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.listItemText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    paddingVertical: theme.spacing.x1,
    paddingHorizontal: theme.spacing.x2,
    backgroundColor: theme.palette.neutral[20],
    borderRadius: theme.spacing.x1,
  },
  listItemText: {
    fontSize: theme.fontSize.sm,
    color: theme.palette.neutral[80],
    lineHeight: theme.fontSize.base * 1.5,
  },
});
