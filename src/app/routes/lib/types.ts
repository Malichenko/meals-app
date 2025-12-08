import type { ComponentType } from "react";
import type {
  NativeStackNavigationOptions,
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import type { CompositeScreenProps, RouteProp, Theme } from "@react-navigation/native";
import type {
  DrawerNavigationOptions,
  DrawerScreenProps,
} from "@react-navigation/drawer";
import type { RouteParams, RouteKey, DrawerParams } from "@shared/routing";

export type ScreenComponent<K extends RouteKey> = ComponentType<
  NativeStackScreenProps<RouteParams, K>
>;

export type ScreenOptions<K extends RouteKey> =
  | NativeStackNavigationOptions
  | ((props: {
      route: RouteProp<RouteParams, K>;
      navigation: NativeStackNavigationProp<RouteParams, K>;
      theme: Theme;
    }) => NativeStackNavigationOptions);

export type ScreenConfig<K extends RouteKey> = {
  component: ScreenComponent<K> | ComponentType<object>;
  options?: ScreenOptions<K>;
};

export interface StackScreenConfig {
  initialRouteName: RouteKey;
  screenOptions: NativeStackNavigationOptions;
  register: { [K in RouteKey]: ScreenConfig<K> };
}

export type DrawerChildComponent<K extends keyof DrawerParams> = ComponentType<
  CompositeScreenProps<
    DrawerScreenProps<DrawerParams, K>,
    NativeStackScreenProps<RouteParams>
  >
>;

export type DrawerScreenConfig<K extends keyof DrawerParams> = {
  component: DrawerChildComponent<K>;
  options?: DrawerNavigationOptions;
};

export type DrawerNavigatorConfig = {
  screenOptions: DrawerNavigationOptions;
  screens: {
    [K in keyof DrawerParams]: DrawerScreenConfig<K>;
  };
};
