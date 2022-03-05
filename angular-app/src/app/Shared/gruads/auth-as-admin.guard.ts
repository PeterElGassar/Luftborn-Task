import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountService } from 'src/app/login/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthAsAdminGuard implements CanActivate {

  constructor(private accountServe: AccountService, private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {


    return this.accountServe.currentUser$.pipe(
      map((user: any) => {
        debugger
         if(user){
          if (user.role === "Admin") return true;
         }
          console.log("From Gruads: " + user);
          this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
         
      })
    )
  }

}
