import { MealModel } from "../model";
import { View, Text, StyleSheet, Pressable, Image, Platform } from "react-native";
import theme from "@shared/config/theme";
import { MealDetails } from "./meal-details";

interface Props {
  meal: MealModel;
  onPress?: (item: MealModel) => void;
}

export const MealItem: React.FC<Props> = ({ meal, onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={onPress?.bind(null, meal)}
      >
        <View style={styles.innerContainer}>
          <Image
            source={{
              uri: meal.imageUrl,
            }}
            style={styles.image}
          />

          <View style={styles.caption}>
            <Text style={styles.title}>{meal.title}</Text>

            <MealDetails
              duration={meal.duration}
              complexity={meal.complexity}
              affordability={meal.affordability}
            />
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: theme.spacing.x4,
    borderRadius: theme.spacing.x2,
    backgroundColor: theme.palette.neutral[10],
    elevation: 4,
    shadowColor: theme.palette.shadow.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: theme.spacing.x2,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    borderRadius: theme.spacing.x2,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  caption: {
    padding: theme.spacing.x1,
    gap: theme.spacing.x2,
  },
  title: {
    fontSize: theme.fontSize.lg,
    fontWeight: "bold",
    textAlign: "center",
  },

  pressed: {
    opacity: 0.75,
  },
});
