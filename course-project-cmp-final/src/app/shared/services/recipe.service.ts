import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../../recipes/recipe.model';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeListService {

  public selectRecipe = new EventEmitter<void>();

  public recipes: Recipe[] = [
    new Recipe(
      'Mango Shake',
      'Sabse phele aam le',
      'https://th.bing.com/th/id/OIP.pNGcDbovt4c5Y1MK3I7isQHaHa?rs=1&pid=ImgDetMain',
      [new Ingredient('Mango', 2), new Ingredient('Milk', 1)]
    ),
    new Recipe(
      'Pani Patashi',
      'Sabse phele pani le',
      'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/xtl6ezqplt2rkpddznuu',
      [new Ingredient('Patashi', 10), new Ingredient('Pani', 1)]
    ),
  ];
}
