import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BOOK } from "../lib";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {Object.entries(BOOK).map(([name, { screen }]) => (
          <Stack.Screen key={name} name={name} component={screen} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
