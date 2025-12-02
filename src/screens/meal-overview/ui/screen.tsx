import { ScreenLayout } from "@shared/ui/screen-layout";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RouteParams } from "@shared/routing";
import { getMealsByCategoryId } from "@entities/meal/model/getMeals";
import { MealsList } from "@widgets/meals-list";

export const MealOverview = ({
  route,
}: NativeStackScreenProps<RouteParams, "MealOverview">) => {
  const { categoryId } = route.params;
  const meals = getMealsByCategoryId(categoryId);

  return (
    <ScreenLayout>
      <MealsList meals={meals} />
    </ScreenLayout>
  );
};
