import { View, Text, StyleSheet, Pressable, Platform } from "react-native";
import { type CategoryModel } from "../model";
import { FC } from "react";
import { theme } from "@shared/config/theme";

export const CategoryGridTile: FC<{ item: CategoryModel }> = ({ item }) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={[styles.innerContainer, { backgroundColor: item.color }]}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: theme.spacing.x4,
    height: theme.spacing.x37,
    borderRadius: theme.spacing.x2,
    elevation: 4,
    shadowColor: theme.palette.shadow.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: theme.spacing.x2,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: theme.spacing.x4,
    borderRadius: theme.spacing.x2,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: theme.fontSize.lg,
  },
});
