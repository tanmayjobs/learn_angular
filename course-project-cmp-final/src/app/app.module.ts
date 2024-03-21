import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { HeaderIconDirective } from './shared/directives/selected-header.directive';
import { BetterIf } from './shared/directives/better-if.directive';
import { DropdownDirective } from './shared/directives/dropdown.directive';
import { Logger } from './shared/services/logging.service';
import { ShowContentOnRoute } from './shared/directives/app-content.directive';
import { ShoppingListService } from './shared/services/shopping-list.service';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRouteModule } from './app-route.module';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { EditRecipeComponent } from './recipes/recipe-edit/recipe-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    HeaderIconDirective,
    BetterIf,
    DropdownDirective,
    ShowContentOnRoute,
    PageNotFoundComponent,
    ErrorMessageComponent,
    EditRecipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouteModule
  ],
  providers: [Logger, ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
