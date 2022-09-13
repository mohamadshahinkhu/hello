import { AuthService } from './_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'EmailApiServerLearning';
  constructor(private authService: AuthService) {
    this.authService.checkAuth().subscribe((response) => {
      // console.log(response);
    });
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.authService.signout().subscribe((response) => {
        console.log(response);
      });
    }, 5000);
  }
}
