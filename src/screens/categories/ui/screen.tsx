import { ScreenLayout } from "@shared/ui/screen-layout";
import { CategoriesList } from "@widgets/categories-list";
import { CATEGORIES } from "@entities/category";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CategoryModel } from "@entities/category";
import type { RouteParams } from "@shared/routing";
import { routes } from "@shared/routing";

export const CategoriesScreen = ({
  navigation,
}: NativeStackScreenProps<RouteParams, "Categories">) => {
  const handlePress = (item: CategoryModel) => {
    const descriptor = routes.MealOverview({
      categoryId: item.id,
      title: item.title,
    });
    navigation.navigate(descriptor.name, descriptor.params);
  };

  return (
    <ScreenLayout>
      <CategoriesList items={CATEGORIES} onItemPress={handlePress} />
    </ScreenLayout>
  );
};
