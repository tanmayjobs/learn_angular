import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeListService } from '../shared/services/recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent{
  constructor(public recipeService: RecipeListService) { }
}
