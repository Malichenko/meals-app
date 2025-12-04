import type { MealModel } from "@entities/meal";

export type ScreenMapKey = "EMPTY_STATE" | "LIST";

export type ScreenMap = Record<ScreenMapKey, (meals: MealModel[]) => boolean>;
