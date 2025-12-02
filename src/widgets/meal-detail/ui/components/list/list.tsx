import { StyleProp, View, ViewStyle } from "react-native";
import { ReactNode } from "react";

interface Props<T> {
  items: T[];
  style?: StyleProp<ViewStyle>;

  renderItem: (props: { item: T; index: number }) => ReactNode;
  keyExtractor: (item: T, index: number) => string;
}

export const List = <T,>({
  items,
  style,
  renderItem,
  keyExtractor,
}: Props<T>) => {
  return (
    <View style={style}>
      {items.map((item, index) => (
        <View key={keyExtractor(item, index)}>
          {renderItem({ item, index })}
        </View>
      ))}
    </View>
  );
};
