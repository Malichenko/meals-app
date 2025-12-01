import type {RouteKey, RouteParams} from "./params";

export type RouteDescriptor<K extends RouteKey = RouteKey> = {
    name: K;
    params: RouteParams[K];
};

export const routes = {
    Categories: (): RouteDescriptor<"Categories"> => ({
        name: "Categories",
        params: undefined,
    }),
    MealOverview: (
        params: RouteParams["MealOverview"]
    ): RouteDescriptor<"MealOverview"> => ({name: "MealOverview", params}),
} as const;
