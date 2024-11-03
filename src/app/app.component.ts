import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mini-shopping-app';
  isLoggedIn = false; 

  ngOnInit() {
    const user = localStorage.getItem('loggedInUser');
    if (user) {
      this.isLoggedIn = true;
    }
  }
}
