import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const productGuardGuard: CanActivateFn = (route, state) => {

  inject(Router).navigate(['unauthorized']);
  return false;
};
