import { MealOverview } from "@screens/meal-overview";
import { MealDetailScreen } from "@screens/meal-detail";
import { LikeButton } from "@features/like-button";
import { DrawerNavigator } from "../ui/drawer-navigator";
import type { StackScreenConfig } from "./types";
import theme from "@shared/config/theme";

export const stackScreenConfig: StackScreenConfig = {
  initialRouteName: "Drawer",
  screenOptions: {
    headerStyle: {
      backgroundColor: theme.palette.primary[60],
    },
    headerTintColor: theme.palette.neutral[10],
    contentStyle: {
      backgroundColor: theme.palette.primary[20],
    },
  },
  register: {
    Drawer: {
      component: DrawerNavigator,
      options: {
        headerShown: false,
      },
    },
    MealOverview: {
      options: ({ route }) => ({
        title: route.params.title,
      }),
      component: MealOverview,
    },
    MealDetail: {
      component: MealDetailScreen,
      options: ({ route }) => ({
        title: route.params.title,
        headerRight: () => (
          <LikeButton
            onPress={(isLiked) => {
              console.log("Like pressed:", isLiked, route.params);
            }}
          />
        ),
      }),
    },
  },
};
