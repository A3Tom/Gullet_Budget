import { FoodItem } from "./food-item";

export interface MealGrouping {
    id?: string;
    name: string;
    items: FoodItem[];
}