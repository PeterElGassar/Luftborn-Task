import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = environment.baseUrl;
  private currentUserSource = new BehaviorSubject<any>(null);

  
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient,private router:Router) { }

  getCurrentUserValue() {
    return this.currentUserSource.value;
  }


  loadCurrentUser(token: string) {
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", `Bearer ${token}`);

    return this.http.get(this.baseUrl + 'account', { headers } ).pipe(

      map((user:any)=>{
        if(user){
              localStorage.setItem("token",user.token);
              this.currentUserSource.next(user);
              console.log(user)
        }
      })
    );
  }



  login(values: any) {
    debugger;

    return this.http.post(this.baseUrl + "account/login", values).pipe(
      map((user: any) => {
        if (user) {
          // console.log("Login Service: "+user);
          
          debugger;
          localStorage.setItem("token", user.token);
          this.currentUserSource.next(user);
        }
      })
    );
  }

  register(values: any) {
   return this.http.post(this.baseUrl + "account/register", values).pipe(
      map(
        (user: any) => {
          if (user) {
            localStorage.setItem("token", user.token);
            this.currentUserSource.next(user);
          }
        }

      )
    )
  }


  logout() {
    localStorage.removeItem("token");
    this.currentUserSource.next(null);
    this.router.navigateByUrl("/");
  }


  checkEmailExists(email:string){
    let headers = new HttpHeaders({"skipLoader": 'true'})

    return this.http.get(this.baseUrl+ `account/emailexists?email=${email}`, {headers});
  }



}
