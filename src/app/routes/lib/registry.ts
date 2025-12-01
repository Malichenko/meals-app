import type { ComponentType } from "react";
import type { NativeStackNavigationOptions, NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RouteParams, RouteKey } from "@shared/routing/params";
import { CategoriesScreen } from "@screens/categories";
import { MealOverview } from "@screens/meal-overview";

export type ScreenComponent<K extends RouteKey> = ComponentType<
  NativeStackScreenProps<RouteParams, K>
>;

type ScreenConfig<K extends RouteKey> = {
  title?: string;
  component: ScreenComponent<K>;
  options?: NativeStackNavigationOptions;
};

export const screenRegistry: { [K in RouteKey]: ScreenConfig<K> } = {
  Categories: {
    title: "All Categories",
    component: CategoriesScreen,
  },
  MealOverview: {
    title: "Meal Overview",
    component: MealOverview,
  },
};
