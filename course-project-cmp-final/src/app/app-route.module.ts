import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgModule } from '@angular/core';
import {
  canActivate,
  canActivateChild,
  canDeactivate,
} from './shared/services/guard.service';
import { ErrorMessageComponent } from './error-message/error-message.component';

const appRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
        canDeactivate: [canDeactivate],
      },
      {
        path: 'recipes',
        component: RecipesComponent,
        children: [{ path: ':recipeId', component: RecipeDetailComponent }],
        canActivateChild: [canActivateChild]
      },
      {
        path: 'shopping-list',
        component: ShoppingListComponent,
        canActivate: [canActivate],
      },
      {
        path: 'page-not-found',
        component: PageNotFoundComponent,
      },
      {
        path: 'error',
        component: ErrorMessageComponent,
        data: { errorMessage: 'Page not found!' },
      },
      {
        path: '**',
        redirectTo: '/error',
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      useHash: false,
    }),
  ],
  exports: [RouterModule],
})
export class AppRouteModule {}