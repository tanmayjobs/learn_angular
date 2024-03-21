import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shared/services/shopping-list.service';
import { Ingredient } from '../../shared/models/ingredient.model';
import { RecipeListService } from '../../shared/services/recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  public recipe: Recipe;
  constructor(
    public shoppingList: ShoppingListService,
    public recipeService: RecipeListService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.recipe = this.recipeService.recipes[params['recipeId']];
    });

    this.route.queryParams.subscribe((params: Params) => {
      console.log(params['toShoppingList']);
    });
  }

  addIngredients(recipe: Recipe) {
    let ingredient: any;
    for (ingredient in recipe.ingredients) {
      this.shoppingList.addIngredient(ingredient.toObject());
    }
  }
}
