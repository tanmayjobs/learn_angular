import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChildFn,
  CanActivateFn,
  CanDeactivateFn,
  Params,
  RouterStateSnapshot,
} from '@angular/router';
import { AppService } from './app.service';

interface CanDeactivateComponent {
    canDeactivate(url: string): boolean;
}

const canActivate: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const app = inject(AppService);
  if (!app.isLoggedIn){
    alert("You are not logged In!");
  }
  return app.isLoggedIn;
};

const canActivateChild: CanActivateChildFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const app = inject(AppService);
  return app.isLoggedIn;
};

const canDeactivate: CanDeactivateFn<CanDeactivateComponent> = (
  component: CanDeactivateComponent,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState: RouterStateSnapshot
) => {
  return component.canDeactivate(nextState.url);
};

export { canActivate, canActivateChild, CanDeactivateComponent, canDeactivate };
