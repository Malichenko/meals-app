import type { RouteKey, RouteParams, DrawerParams } from "./params";

type Params<K extends RouteKey> = K extends keyof RouteParams
  ? RouteParams[K]
  : K extends keyof DrawerParams
  ? DrawerParams[K]
  : never;

export type RouteDescriptor<K extends RouteKey> = {
  name: K;
  params: Params<K>;
};

export const routes = {
  Drawer: (params: RouteParams["Drawer"]): RouteDescriptor<"Drawer"> => ({
    name: "Drawer",
    params,
  }),
  MealOverview: (
    params: RouteParams["MealOverview"]
  ): RouteDescriptor<"MealOverview"> => ({ name: "MealOverview", params }),
  MealDetails: (
    params: RouteParams["MealDetail"]
  ): RouteDescriptor<"MealDetail"> => ({ name: "MealDetail", params }),
  FavoriteMeals: (
    params: DrawerParams["FavoriteMeals"]
  ): RouteDescriptor<"FavoriteMeals"> => ({
    name: "FavoriteMeals",
    params,
  }),
} as const;
