import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { RouteParams } from "@shared/routing/params";
import { screenRegistry } from "../lib";
import { objectEntries } from "@shared/utils/object";

const Stack = createNativeStackNavigator<RouteParams>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Categories">
        {objectEntries(screenRegistry).map(([name, cfg ]) => {
          return (
            <Stack.Screen
              key={name}
              name={name}
              component={cfg.component as never}
              options={{ title: cfg.title, ...(cfg.options ?? {}) }}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
