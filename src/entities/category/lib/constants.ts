import { createCategory } from "../model";
import type { Category } from "../model";

export const CATEGORIES: Category[] = [
  createCategory("c1", "Italian", "#f5428d"),
  createCategory("c2", "Quick & Easy", "#f54242"),
  createCategory("c3", "Hamburgers", "#f5a442"),
  createCategory("c4", "German", "#f5d142"),
  createCategory("c5", "Light & Lovely", "#368dff"),
  createCategory("c6", "Exotic", "#41d95d"),
  createCategory("c7", "Breakfast", "#9eecff"),
  createCategory("c8", "Asian", "#b9ffb0"),
  createCategory("c9", "French", "#ffc7ff"),
  createCategory("c10", "Summer", "#47fced"),
];
