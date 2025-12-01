import type { MealModel, Affordability, Complexity } from "./types";

export class Meal implements MealModel {
  public id: string;
  public categoryIds: string[];
  public title: string;
  public affordability: Affordability;
  public complexity: Complexity;
  public imageUrl: string;
  public duration: number;
  public ingredients: string[];
  public steps: string[];
  public isGlutenFree: boolean;
  public isVegan: boolean;
  public isVegetarian: boolean;
  public isLactoseFree: boolean;

  constructor(data: MealModel) {
    this.id = data.id;
    this.categoryIds = data.categoryIds;
    this.title = data.title;
    this.affordability = data.affordability;
    this.complexity = data.complexity;
    this.imageUrl = data.imageUrl;
    this.duration = data.duration;
    this.ingredients = data.ingredients;
    this.steps = data.steps;
    this.isGlutenFree = data.isGlutenFree;
    this.isVegan = data.isVegan;
    this.isVegetarian = data.isVegetarian;
    this.isLactoseFree = data.isLactoseFree;
  }
}
