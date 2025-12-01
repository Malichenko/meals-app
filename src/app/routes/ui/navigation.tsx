import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BOOK, type RootStackParamList } from "../lib/book";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Categories">
        <Stack.Screen
          name="Categories"
          component={BOOK.Categories.screen}
          options={{ title: "All Categories" }}
        />
        <Stack.Screen
          name="MealOverview"
          component={BOOK.MealOverview.screen}
          options={{ title: "Meal Overview" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
