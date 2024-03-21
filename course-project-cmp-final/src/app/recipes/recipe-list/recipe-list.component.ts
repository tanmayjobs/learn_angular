import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/models/ingredient.model';
import { RecipeListService } from '../../shared/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  constructor(public recipeService: RecipeListService) {}
  ngOnInit() {}

}
