import { FlatList } from "react-native";
import { CategoryGridTile, type CategoryModel } from "@entities/category";

type Props = {
  items: CategoryModel[];
  onItemPress?: (item: CategoryModel) => void;
};

export const CategoriesList = ({ items, onItemPress }: Props) => {
  return (
    <FlatList
      data={items}
      renderItem={({ item }) => (
        <CategoryGridTile item={item} onPress={onItemPress} />
      )}
      keyExtractor={(item) => item.id}
      numColumns={2}
      showsVerticalScrollIndicator={false}
    />
  );
};
