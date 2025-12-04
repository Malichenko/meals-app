import { ScreenLayout } from "@shared/ui/screen-layout";
import { useMealSelectors, type MealModel } from "@entities/meal";
import type { DrawerParams, RouteParams } from "@shared/routing";
import { routes } from "@shared/routing";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { getComponent } from "../lib";
import { useMemo } from "react";

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

  const Component = useMemo(() => getComponent(favoriteMeals), [favoriteMeals]);

  return (
    <ScreenLayout>
      <Component meals={favoriteMeals} onItemPress={handlePress} />
    </ScreenLayout>
  );
};
