import { ScreenLayout } from "@shared/ui/screen-layout";
import { Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RouteParams } from "@shared/routing";
import { getMealById } from "@entities/meal";

export const MealDetailScreen = ({
  route,
}: NativeStackScreenProps<RouteParams, "MealDetail">) => {
  const { mealId } = route.params;
  const meal = getMealById(mealId);

  return (
    <ScreenLayout>
      <Text>{meal?.title}</Text>
    </ScreenLayout>
  );
};
