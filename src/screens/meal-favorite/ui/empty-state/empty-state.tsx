import theme from "@shared/config/theme";
import { Card } from "@shared/ui/card";
import { Text, View, StyleSheet } from "react-native";

export const MealFavoriteEmptyState = () => {
  return (
    <View
      accessible
      accessibilityRole="summary"
      accessibilityLabel="No favorite meals yet"
      style={styles.root}
    >
      <Card>
        <Text style={styles.title}>Favorites stay fresh here</Text>
        <Text style={styles.description}>
          Save dishes you love by tapping the heart icon on any meal. They will
          appear on this screen for quick access.
        </Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: theme.spacing.x4,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: theme.palette.neutral[90],
    marginBottom: theme.spacing.x2,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: theme.palette.neutral[70],
  },
});
