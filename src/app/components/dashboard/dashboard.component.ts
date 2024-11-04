import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users$: Observable<User[]>;
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.users$ = this.userService.getAllUsers();
  }

}
