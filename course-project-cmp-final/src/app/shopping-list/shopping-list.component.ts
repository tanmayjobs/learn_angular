import { Component, } from '@angular/core';
import { ShoppingListService } from '../shared/services/shopping-list.service';
import { Ingredient } from '../shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[];

  constructor(public shoppingList: ShoppingListService){
    this.shoppingList.ingredientsModified.subscribe(
      (value) => this.ingredients = shoppingList.ingredients
    );
    this.ingredients = this.shoppingList.ingredients;
  }

}
