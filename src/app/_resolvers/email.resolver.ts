import { EmailService } from 'src/app/_services/email.service';
import { EmailDetail } from './../_services/email.service';
import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailResolver implements Resolve<EmailDetail> {
  constructor(private emailService: EmailService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<EmailDetail> {
    const id = route.params['id'];

    return this.emailService.getemails(id);
  }
}
