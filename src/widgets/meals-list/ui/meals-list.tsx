import { FlatList } from "react-native";
import { MealModel, MealItem } from "@entities/meal";

type Props = {
  meals: MealModel[];
  onItemPress?: (item: MealModel) => void;
};

export const MealsList: React.FC<Props> = ({ meals, onItemPress }) => {
  return (
    <FlatList
      data={meals}
      renderItem={({ item }) => <MealItem meal={item} onPress={onItemPress} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};
