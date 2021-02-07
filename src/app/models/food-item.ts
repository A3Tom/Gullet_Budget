import { AlternativeUnit } from "./alternative-unit";
import { MacroInfo } from "./macro-info";

export interface FoodItem {
    id?: string;
    name: string;
    manufacturer: string;
    macros: MacroInfo;
    preferredUnits: AlternativeUnit[];
}