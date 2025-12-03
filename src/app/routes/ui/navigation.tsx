import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { RouteParams } from "@shared/routing";
import { stackScreenConfig } from "../lib/stack-config";
import { objectEntries } from "@shared/utils/object";

const Stack = createNativeStackNavigator<RouteParams>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={stackScreenConfig.initialRouteName}
        screenOptions={stackScreenConfig.screenOptions}
      >
        {objectEntries(stackScreenConfig.register).map(([name, cfg]) => {
          return (
            <Stack.Screen
              key={name}
              name={name}
              component={cfg.component as never}
              options={cfg.options as never}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
