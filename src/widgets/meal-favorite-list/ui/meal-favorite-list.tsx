import { MealModel, MealItem } from "@entities/meal";
import { FlatList } from "react-native";

interface Props {
  meals: MealModel[];
  onItemPress: (item: MealModel) => void;
}

export const MealFavoriteList: React.FC<Props> = ({ meals, onItemPress }) => {
  return (
    <FlatList
      data={meals}
      renderItem={({ item }) => <MealItem meal={item} onPress={onItemPress} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};
