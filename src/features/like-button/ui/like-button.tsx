import { FC } from "react";
import { IconButton } from "@shared/ui/icon-button";
import theme from "@shared/config/theme";
import { useMealSelectors } from "@entities/meal";

interface Props {
  mealId: string;
}

export const LikeButton: FC<Props> = ({ mealId }) => {
  const isLiked = useMealSelectors.isFavorite(mealId);
  const toggleFavorite = useMealSelectors.toggleFavorite();

  const handlePress = () => {
    toggleFavorite(mealId);
  };

  const iconName = isLiked ? "heart" : "heart-outline";
  const iconColor = isLiked
    ? theme.palette.danger[60]
    : theme.palette.neutral[10];

  return <IconButton icon={iconName} onPress={handlePress} color={iconColor} />;
};
