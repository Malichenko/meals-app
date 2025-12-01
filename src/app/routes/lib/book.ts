import { CategoriesScreen } from "@screens/categories";
import { FC } from "react";

type Book = {
  [key: string]: {
    screen: FC;
  };
};

export const BOOK: Book = {
  Categories: {
    screen: CategoriesScreen,
  },
};
