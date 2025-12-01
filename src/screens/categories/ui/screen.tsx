import { ScreenLayout } from "@shared/ui/screen-layout";
import { CategoriesList } from "@widgets/categories-list";
import { CATEGORIES } from "@entities/category/lib";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CategoryModel } from "@entities/category";
import type { RouteParams } from "@shared/routing/params";
import { routes } from "@shared/routing/builders";

export const CategoriesScreen = ({
  navigation,
}: NativeStackScreenProps<RouteParams, "Categories">) => {
  const handlePress = (item: CategoryModel) => {
    const descriptor = routes.MealOverview({ categoryId: item.id });
    navigation.navigate(descriptor.name, descriptor.params);
  };

  return (
    <ScreenLayout>
      <CategoriesList items={CATEGORIES} onItemPress={handlePress} />
    </ScreenLayout>
  );
};
