import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { skipWhile, take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AccesGuard implements CanActivate {
  constructor(private authService: AuthService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> {
    return this.authService.signedin$.pipe(
      skipWhile((signedin) => signedin === null || signedin === false),
      take(1),
      map((signedin) =>
      {
        return signedin;
      })
    );
  }
}
