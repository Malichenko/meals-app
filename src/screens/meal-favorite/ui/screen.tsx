import { ScreenLayout } from "@shared/ui/screen-layout";
import { MealFavoriteList } from "@widgets/meal-favorite-list";
import { useMealSelectors, type MealModel } from "@entities/meal";

export const MealFavoriteScreen = () => {
  const favoriteMeals = useMealSelectors.favorites();

  const handlePress = (_item: MealModel) => {
    // TODO: navigate to meal detail
  };

  return (
    <ScreenLayout>
      <MealFavoriteList meals={favoriteMeals} onItemPress={handlePress} />
    </ScreenLayout>
  );
};
