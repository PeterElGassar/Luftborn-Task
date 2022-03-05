import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from './account.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  mobileNumber: any;
  reCaptureVerifier: any;
  errorMessage:string =null;
  isSendedCodeSuccess: boolean = false


  constructor(private fb: FormBuilder, private accountService: AccountService,
    private router: Router) { }

  ngOnInit(): void {
    this.createloginForm();
  }

  createloginForm() {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.pattern('^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$')]],
      password: [null, [Validators.required, Validators.pattern("(?=^.{6,10}$)(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?//&gt;.&lt;,])(?!.*\\s).*$")]],
    });


  }


  onSubmit() {
    debugger
    console.log(this.loginForm.value);
    
    this.accountService.login(this.loginForm.value).subscribe(() => {
      debugger
      this.router.navigateByUrl('/dashboard');
    }, error => {
      console.log(error);
      debugger
      this.errorMessage = error.error.message;
    })
  }

  get getEmail() {
    return this.loginForm.get('email');
  }
  get getpassword() {
    return this.loginForm.get('password');
  }

}
