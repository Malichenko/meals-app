import theme from "@shared/config/theme";
import { type FC, type PropsWithChildren } from "react";
import { View, StyleSheet, type ViewProps } from "react-native";

export const Card: FC<PropsWithChildren<ViewProps>> = ({ children, style, ...rest }) => {
  return (
    <View {...rest} style={[styles.card, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.palette.neutral[10],
    borderRadius: theme.spacing.x5,
    padding: theme.spacing.x5,
    shadowColor: theme.palette.shadow.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 4,
    width: "100%",
    maxWidth: 480,
  },
});
