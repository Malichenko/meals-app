import { FC, useState } from "react";
import { IconButton } from "@shared/ui/icon-button";
import theme from "@shared/config/theme";

interface Props {
  onPress?: (isLiked: boolean) => void;
  initialLiked?: boolean;
}

export const LikeButton: FC<Props> = ({ onPress, initialLiked = false }) => {
  const [isLiked, setIsLiked] = useState(initialLiked);

  const handlePress = () => {
    const newLikedState = !isLiked;
    setIsLiked(newLikedState);
    onPress?.(newLikedState);
  };

  const iconName = isLiked ? "heart" : "heart-outline";
  const iconColor = isLiked
    ? theme.palette.danger[60]
    : theme.palette.neutral[10];

  return <IconButton icon={iconName} onPress={handlePress} color={iconColor} />;
};
