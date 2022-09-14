import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {


  constructor(private AuthService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.AuthService.signout().pipe(delay(3000)).subscribe(()=>
    {
 this.router.navigate(['/'])
    })
  }

}
