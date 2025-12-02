import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { RouteParams } from "@shared/routing";
import { screenRegistry } from "../lib";
import { objectEntries } from "@shared/utils/object";
import theme from "@shared/config/theme";

const Stack = createNativeStackNavigator<RouteParams>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Categories"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.palette.primary[60],
          },
          headerTintColor: theme.palette.neutral[10],
          contentStyle: {
            backgroundColor: theme.palette.primary[20],
          },
        }}
      >
        {objectEntries(screenRegistry).map(([name, cfg]) => {
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
