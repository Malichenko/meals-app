import { ScreenLayout } from "@shared/ui/screen-layout";
import { CategoriesList } from "@widgets/categories-list";
import { CATEGORIES } from "@entities/category/lib";

export const CategoriesScreen = () => {
  const handlePress = () => {
    // Navigation will be wired later in features/screen
  };

  return (
    <ScreenLayout>
      <CategoriesList items={CATEGORIES} onItemPress={handlePress} />
    </ScreenLayout>
  );
};
