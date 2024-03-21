import { EventEmitter } from "@angular/core";
import { Ingredient } from "../models/ingredient.model";

export class ShoppingListService{
    public ingredients: Ingredient[] = [];
    public ingredientsModified: EventEmitter<void> = new  EventEmitter<void>();

    addIngredient(ingreidentDetails: {ingredientName: string, ingredientAmount: number}){
        let newIngredient: Ingredient = new Ingredient(ingreidentDetails.ingredientName, ingreidentDetails.ingredientAmount);
        this.ingredients.push(newIngredient);
        this.ingredientsModified.emit();
    }

    removeItem(index: number) {
        this.ingredients.splice(index, 1);
    }
}
