import { ScreenLayout } from "@shared/ui/screen-layout";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RouteParams } from "@shared/routing";
import { getMealsByCategoryId } from "@entities/meal/model/getMeals";
import { MealsList } from "@widgets/meals-list";
import { MealModel } from "@entities/meal/model";
import { routes } from "@shared/routing";

export const MealOverview = ({
  navigation,
  route,
}: NativeStackScreenProps<RouteParams, "MealOverview">) => {
  const { categoryId } = route.params;
  const meals = getMealsByCategoryId(categoryId);

  const handlePress = (item: MealModel) => {
    const descriptor = routes.MealDetails({
      mealId: item.id,
      title: item.title,
    });
    navigation.navigate(descriptor.name, descriptor.params);
  };

  return (
    <ScreenLayout>
      <MealsList meals={meals} onItemPress={handlePress} />
    </ScreenLayout>
  );
};
