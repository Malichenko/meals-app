import { ScreenLayout } from "@shared/ui/screen-layout";
import { CategoriesList } from "@widgets/categories-list";
import { CATEGORIES } from "@entities/category/lib";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { CategoryModel } from "@entities/category";
import { type RootStackParamList } from "@app/routes/lib/book";

export const CategoriesScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Categories">) => {
  const handlePress = (item: CategoryModel) => {
    navigation.navigate("MealOverview", { categoryId: item.id });
  };

  return (
    <ScreenLayout>
      <CategoriesList items={CATEGORIES} onItemPress={handlePress} />
    </ScreenLayout>
  );
};
