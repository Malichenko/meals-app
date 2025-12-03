import { Ionicons } from "@expo/vector-icons";
import theme from "@shared/config/theme";
import { CategoriesScreen } from "@screens/categories";
import { MealFavoriteScreen } from "@screens/meal-favorite";
import type { DrawerNavigatorConfig } from "./types";

export const drawerNavigatorConfig: DrawerNavigatorConfig = {
  screenOptions: {
    headerStyle: {
      backgroundColor: theme.palette.primary[60],
    },
    headerTintColor: theme.palette.neutral[10],
    drawerContentStyle: {
      backgroundColor: theme.palette.primary[60],
    },
    drawerInactiveTintColor: theme.palette.neutral[10],
    drawerActiveTintColor: theme.palette.primary[60],
    drawerActiveBackgroundColor: theme.palette.primary[20],
  },
  screens: {
    Categories: {
      component: CategoriesScreen,
      options: {
        title: "All Categories",
        drawerIcon: ({ color, size }) => (
          <Ionicons name="list" color={color} size={size} />
        ),
      },
    },
    FavoriteMeals: {
      component: MealFavoriteScreen,
      options: {
        title: "Favorites",
        drawerIcon: ({ color, size }) => (
          <Ionicons name="heart" color={color} size={size} />
        ),
      },
    },
  },
};
