import type { RouteKey, RouteParams } from "./params";

export type RouteDescriptor<K extends RouteKey = RouteKey> = {
  name: K;
  params: RouteParams[K];
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
} as const;
