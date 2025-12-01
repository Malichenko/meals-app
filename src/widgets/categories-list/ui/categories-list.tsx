import { FlatList } from "react-native";
import {
  CATEGORIES,
  CategoryGridTile,
  type CategoryModel,
} from "@entities/category";

// Util fn just to make markup cleaner
const renderCategoryItem = ({ item }: { item: CategoryModel }) => {
  return <CategoryGridTile item={item} />;
};

export const CategoriesList = () => {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
      showsVerticalScrollIndicator={false}
    />
  );
};
