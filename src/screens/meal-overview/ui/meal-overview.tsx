import { ScreenLayout } from "@shared/ui/screen-layout";
import { Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RouteParams } from "@shared/routing/params";

export const MealOverview = ({
  route,
}: NativeStackScreenProps<RouteParams, "MealOverview">) => {
  const { categoryId } = route.params;

  return (
    <ScreenLayout>
      <Text>Meal Overview</Text>
      <Text>Category ID: {categoryId}</Text>
    </ScreenLayout>
  );
};
