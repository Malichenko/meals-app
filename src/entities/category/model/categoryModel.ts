import type { CategoryModel } from "./types";

export class Category implements CategoryModel {
  public id: string;
  public title: string;
  public color: string;

  constructor(data: CategoryModel) {
    this.id = data.id;
    this.title = data.title;
    this.color = data.color;
  }
}
