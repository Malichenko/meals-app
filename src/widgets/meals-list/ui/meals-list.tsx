import { FlatList } from "react-native";
import { MealModel, MealItem } from "@entities/meal";

type Props = {
  meals: MealModel[];
};

export const MealsList: React.FC<Props> = ({ meals }) => {
  return (
    <FlatList
      data={meals}
      renderItem={({ item }) => <MealItem meal={item} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};
