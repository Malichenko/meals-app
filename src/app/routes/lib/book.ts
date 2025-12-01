import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CategoriesScreen } from "@screens/categories";
import { MealOverview } from "@screens/meal-overview";
import { ComponentType } from "react";

export type RootStackParamList = {
  Categories: undefined;
  MealOverview: { categoryId: string };
};

type Book = {
  [K in keyof RootStackParamList]: {
    name: string;
    screen: ComponentType<NativeStackScreenProps<RootStackParamList, K>>;
  };
};

export const BOOK: Book = {
  Categories: {
    name: "Categories",
    screen: CategoriesScreen,
  },
  MealOverview: {
    name: "Meal Overview",
    screen: MealOverview,
  },
};
