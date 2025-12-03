import { ScreenLayout } from "@shared/ui/screen-layout";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RouteParams } from "@shared/routing";
import { useMealStore, type MealModel } from "@entities/meal";
import { MealsList } from "@widgets/meals-list";
import { routes } from "@shared/routing";

export const MealOverview = ({
  navigation,
  route,
}: NativeStackScreenProps<RouteParams, "MealOverview">) => {
  const { categoryId } = route.params;
  const meals = useMealStore((state) => state.getMealsByCategoryId(categoryId));

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
