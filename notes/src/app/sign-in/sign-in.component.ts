import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  hide = true;
  email: string = "";
  password: string = "";
  constructor(private http:HttpClient, private apiService:ApiService) { }

  ngOnInit(): void {
  }

  LoginUser(){
    this.apiService.doPost(
      'loginUser',
      {
        'email': this.email,
        'password': this.password,
      }
    ).subscribe(res => {
      console.log("Login successfully", res);
    }, err => {
      console.log(err)
    }
    )
  }

  // email = new FormControl('', [Validators.required, Validators.email]);
  // password = new FormControl('', [Validators.required, Validators.password]);
  // email = new FormControl('', Validators.compose([
  //   Validators.required,
  //   Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
  // ]));

  // getEmailErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a email';
  //   }
  //   else
  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

  // password = new FormControl('', Validators.compose([
  //   Validators.required,
  //   Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')
  // ]));

  // getPasswordErrorMessage() {
  //   if (this.password.hasError('required')) {
  //     return 'You must enter a password';
  //   }
  //   return this.password.hasError('password') ? 'Not a valid password' : '';
  // }
  // else if (!((this.password) === (this.matchPassword))) {
  //   return 'Not a valid password';
  // }
}
