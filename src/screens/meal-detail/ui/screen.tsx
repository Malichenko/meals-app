import { ScreenLayout } from "@shared/ui/screen-layout";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RouteParams } from "@shared/routing";
import { getMealById } from "@entities/meal";
import { Meal } from "@widgets/meal-detail";

export const MealDetailScreen = ({
  route,
}: NativeStackScreenProps<RouteParams, "MealDetail">) => {
  const { mealId } = route.params;
  const meal = getMealById(mealId);

  return (
    <ScreenLayout>
      <Meal meal={meal} />
    </ScreenLayout>
  );
};
