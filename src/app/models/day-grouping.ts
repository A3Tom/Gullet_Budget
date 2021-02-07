import { FoodItem } from "./food-item";
import { MealGrouping } from "./meal-grouping";

export interface DayGrouping {
    id?: number;
    name: string;
    items: FoodItem[];
    meals: MealGrouping[];
}