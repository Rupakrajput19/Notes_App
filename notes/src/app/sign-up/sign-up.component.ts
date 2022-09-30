import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  hide = true;

  constructor(private http: HttpClient, private apiService: ApiService) { }
  name: string = "";
  email: string = "";
  mobile: number | undefined ;
  password: string = "";
  cpassword: string = "";
  res:any;
  err:any;

  ngOnInit(): void {
  }

  Registered(){
    this.apiService.doPost(
      'saveUser',
      {
        'name': this.name,
        'email': this.email,
        'mobile': this.mobile,
        'password': this.password,
        'cpassword': this.cpassword,
      }
    ).subscribe(res => {
      console.log("Data saved successfully", res);
    }, err => {
      console.log(err)
    }
    )
  }

  // email = new FormControl('', [Validators.required, Validators.email]);
  // email = new FormControl('', Validators.compose([
  //   Validators.required,
  //   Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
  // ]));

  // getEmailErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }
  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

}
