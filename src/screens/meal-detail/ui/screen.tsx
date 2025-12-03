import { ScreenLayout } from "@shared/ui/screen-layout";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RouteParams } from "@shared/routing";
import { useMealSelectors } from "@entities/meal";
import { Meal } from "@widgets/meal-detail";

export const MealDetailScreen = ({
  route,
}: NativeStackScreenProps<RouteParams, "MealDetail">) => {
  const { mealId } = route.params;
  const meal = useMealSelectors.byId(mealId);

  if (!meal) {
    return null;
  }

  return (
    <ScreenLayout>
      <Meal meal={meal} />
    </ScreenLayout>
  );
};
