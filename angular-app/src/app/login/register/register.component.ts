import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  mobileNumber: any;
  reCaptureVerifier: any;
  errorMessage:string =null;
  isSendedCodeSuccess: boolean = false


  constructor(private fb: FormBuilder, private accountService: AccountService,
    private router: Router) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({

      email: [null, [Validators.required, Validators.pattern('^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$')]],
      password: [null, [Validators.required, Validators.pattern("(?=^.{6,10}$)(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?//&gt;.&lt;,])(?!.*\\s).*$")]],
      confirmPassword: [null, [Validators.required, Validators.pattern("(?=^.{6,10}$)(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?//&gt;.&lt;,])(?!.*\\s).*$")]],
      role:["Candidate"],
    });

  }


  onSubmit() {
    this.accountService.register(this.registerForm.value).subscribe(() => {
      this.router.navigateByUrl('/Login');
    }, error => {
      console.log(error);
      this.errorMessage = error.error.message;
      // this.router.navigateByUrl('/Login');
    })
  }

  get getEmail() {
    return this.registerForm.get('email');
  }
  get getpassword() {
    return this.registerForm.get('password');
  }
  get getConfPassword() {
    return this.registerForm.get('confirmPassword');
  }

}
