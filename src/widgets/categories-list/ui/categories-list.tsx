import {FlatList} from "react-native";
import {CategoryGridTile, type CategoryModel} from "@entities/category";

type Props = {
    items: CategoryModel[];
    onItemPress?: (item: CategoryModel) => void;
};

// Util fn just to make markup cleaner
const renderCategoryItem = ({item}: { item: CategoryModel }) => {
    return <CategoryGridTile item={item} onPress={() => undefined}/>;
};

export const CategoriesList = ({items}: Props) => {
    return (
        <FlatList
            data={items}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            showsVerticalScrollIndicator={false}
        />
    );
};
