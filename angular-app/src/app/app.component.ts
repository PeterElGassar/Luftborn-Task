import { Component } from '@angular/core';
import { AccountService } from './login/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-challenge';


  
  constructor(private accountService: AccountService) {
    this.loadCurrentUser();
  }
  ngOnInit(): void {
    
  }

  loadCurrentUser() {
    const token = localStorage.getItem("token");
    if (token) {
      this.accountService.loadCurrentUser(token).subscribe(() => {
        console.log("Loaded User");

      }, error => {
        console.log(error);

      });
    }
  }

}
