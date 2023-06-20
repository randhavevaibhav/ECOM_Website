
import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { SellerService } from './services/seller.service';




export const authGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state:RouterStateSnapshot) => {
const auth = inject(SellerService);
if(localStorage.getItem('seller'))
{
    return true;
}
  return auth.isSellerLoggedIn;
};
