import { Category } from "./categoryModel";
import type { CategoryModel as CategoryType } from "./types";

export const CATEGORIES: CategoryType[] = [
  new Category({ id: "c1", color: "#f5428d", title: "Italian" }),
  new Category({ id: "c2", color: "#f54242", title: "Quick & Easy" }),
  new Category({ id: "c3", color: "#f5a442", title: "Hamburgers" }),
  new Category({ id: "c4", color: "#f5d142", title: "German" }),
  new Category({ id: "c5", color: "#368dff", title: "Light & Lovely" }),
  new Category({ id: "c6", color: "#41d95d", title: "Exotic" }),
  new Category({ id: "c7", color: "#9eecff", title: "Breakfast" }),
  new Category({ id: "c8", color: "#b9ffb0", title: "Asian" }),
  new Category({ id: "c9", color: "#ffc7ff", title: "French" }),
  new Category({ id: "c10", color: "#47fced", title: "Summer" }),
];
