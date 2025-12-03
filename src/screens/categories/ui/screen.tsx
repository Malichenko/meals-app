import { ScreenLayout } from "@shared/ui/screen-layout";
import { CategoriesList } from "@widgets/categories-list";
import { CATEGORIES } from "@entities/category";
import { CategoryModel } from "@entities/category";
import type { RouteParams, DrawerParams } from "@shared/routing";
import { routes } from "@shared/routing";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = CompositeScreenProps<
  DrawerScreenProps<DrawerParams, "Categories">,
  NativeStackScreenProps<RouteParams>
>;

export const CategoriesScreen = ({ navigation }: Props) => {
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
