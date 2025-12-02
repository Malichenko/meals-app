import type { ComponentType } from "react";
import type {
  NativeStackNavigationOptions,
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import type { RouteProp } from "@react-navigation/native";
import type { RouteParams, RouteKey } from "@shared/routing";
import { CategoriesScreen } from "@screens/categories";
import { MealOverview } from "@screens/meal-overview";
import { MealDetailScreen } from "@screens/meal-detail";

export type ScreenComponent<K extends RouteKey> = ComponentType<
  NativeStackScreenProps<RouteParams, K>
>;

type ScreenOptions<K extends RouteKey> =
  | NativeStackNavigationOptions
  | ((props: {
      route: RouteProp<RouteParams, K>;
      navigation: NativeStackNavigationProp<RouteParams, K>;
      theme: ReactNavigation.Theme;
    }) => NativeStackNavigationOptions);

type ScreenConfig<K extends RouteKey> = {
  component: ScreenComponent<K>;
  options?: ScreenOptions<K>;
};

export const screenRegistry: { [K in RouteKey]: ScreenConfig<K> } = {
  Categories: {
    component: CategoriesScreen,
    options: {
      title: "All Categories",
    },
  },
  MealOverview: {
    options: ({ route }) => ({
      title: route.params.title,
    }),
    component: MealOverview,
  },
  MealDetail: {
    component: MealDetailScreen,
    options: ({ route }) => ({
      title: route.params.title,
    }),
  },
};
