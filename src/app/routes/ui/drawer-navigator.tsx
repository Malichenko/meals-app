import { createDrawerNavigator } from "@react-navigation/drawer";
import type { DrawerParams } from "@shared/routing";
import { objectEntries } from "@shared/utils/object";
import { drawerNavigatorConfig } from "../lib";

const Drawer = createDrawerNavigator<DrawerParams>();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={drawerNavigatorConfig.screenOptions}>
      {objectEntries(drawerNavigatorConfig.screens).map(([name, cfg]) => (
        <Drawer.Screen
          key={name}
          name={name}
          component={cfg.component as never}
          options={cfg.options}
        />
      ))}
    </Drawer.Navigator>
  );
};
