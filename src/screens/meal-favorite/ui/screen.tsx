import { ScreenLayout } from "@shared/ui/screen-layout";
import { MealFavoriteList } from "@widgets/meal-favorite-list";
import { useMealSelectors, type MealModel } from "@entities/meal";
import type { DrawerParams, RouteParams } from "@shared/routing";
import { routes } from "@shared/routing";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = CompositeScreenProps<
  DrawerScreenProps<DrawerParams, "FavoriteMeals">,
  NativeStackScreenProps<RouteParams>
>;

export const MealFavoriteScreen = ({ navigation }: Props) => {
  const favoriteMeals = useMealSelectors.favorites();

  const handlePress = (item: MealModel) => {
    const descriptor = routes.MealDetails({
      mealId: item.id,
      title: item.title,
    });
    navigation.navigate(descriptor.name, descriptor.params);
  };

  return (
    <ScreenLayout>
      <MealFavoriteList meals={favoriteMeals} onItemPress={handlePress} />
    </ScreenLayout>
  );
};
