import { MealModel } from "../model";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Platform,
} from "react-native";
import theme from "@shared/config/theme";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

interface Props {
  meal: MealModel;
}

export const MealItem: React.FC<Props> = ({ meal }) => {
  return (
    <View style={styles.container}>
      <Pressable style={({ pressed }) => pressed && styles.pressed}>
        <View style={styles.innerContainer}>
          <Image
            source={{
              uri: meal.imageUrl,
            }}
            style={styles.image}
          />

          <View style={styles.caption}>
            <Text style={styles.title}>{meal.title}</Text>

            <View style={styles.details}>
              <View style={styles.detailItem}>
                <FontAwesome6
                  name="clock"
                  size={18}
                  color={theme.palette.neutral[60]}
                />
                <Text style={styles.detailText}>{meal.duration}m</Text>
              </View>

              <View style={styles.detailItem}>
                <FontAwesome6
                  name="bars-progress"
                  size={18}
                  color={theme.palette.neutral[60]}
                />
                <Text style={styles.detailText}>
                  {meal.complexity.toUpperCase()}
                </Text>
              </View>

              <View style={styles.detailItem}>
                <FontAwesome6
                  name="dollar-sign"
                  size={18}
                  color={theme.palette.neutral[60]}
                />
                <Text style={styles.detailText}>
                  {meal.affordability.toUpperCase()}
                </Text>
              </View>
            </View>
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
  pressed: {
    opacity: 0.75,
  },
});
