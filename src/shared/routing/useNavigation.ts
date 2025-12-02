import { useNavigation as useNavigationNative } from "@react-navigation/native";
import { RouteParams } from "./params";
import { NavigationProp } from "@react-navigation/native";

export const useNavigation = () =>
  useNavigationNative<NavigationProp<RouteParams, "MealOverview">>();
