import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm !: FormGroup;
  constructor(private router: Router,private formbuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm =this.formbuilder.group({
      username: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]]
    })
  }
  

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, email } = this.loginForm.value;
      localStorage.setItem('username', username);
      localStorage.setItem('email', email);
      console.log('User information saved to localStorage');
      this.router.navigate(['/dashboard']);
    }
  }
}