import { Component, OnInit, TemplateRef } from '@angular/core';
import { IAd } from '../Shared/IAd';
import { DashboardService } from './dashboard.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { AccountService } from '../login/account.service';
import { IUser } from '../Shared/IUser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class DashboardComponent implements OnInit {


  candidates: IUser[];
  phoneNumber: any = null;

  candidate: IUser;
  ActivateAddEdit: boolean = false;
  modalTitle: string;
  currentUser$: Observable<any>
  userId:string

  constructor(
    private dashboardServe: DashboardService
    , private accountServe: AccountService
    , private router: Router
    , private confirmService: ConfirmationService
    , private messageService: MessageService) {
      // this.getUserId();
     }


  ngOnInit(): void {
    this.currentUser$ = this.accountServe.currentUser$;
    this.getCurrentUser();
    this.getAllAds();
  }



  getCurrentUser() {
    let user_data = JSON.parse(localStorage.getItem("user_data") || '{}');
    console.log(user_data);

    if (user_data != {})
      this.phoneNumber = user_data.user.phoneNumber;
  }

  getAllAds() {
    this.dashboardServe.getAllCandidate().subscribe((res: any[]) => {
      this.candidates = res;
    });
  }

  logout() {
    this.accountServe.logout();
  }


  addNewClick() {
    this.modalTitle = 'Add New Candidate';
    this.ActivateAddEdit = true;
    this.candidate = {
    id: 0,
    firstName: '',
    middleName: '',
    lastName: '',
    country: '',
    educationLevel: '',
    }
  }


  editClick(mediaInfo: any) {
    this.modalTitle = 'Edit Candidate';
    debugger;
    this.candidate = mediaInfo;
    this.ActivateAddEdit = true;
  }


  closeModal() {
    this.getAllAds();
    this.candidate = null;
    this.ActivateAddEdit = false;
  }


  confirm(AdId: any) {
    this.confirmService.confirm({
      message: 'Are you sure that you want to delete Candidate?',
      header: '',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

        this.dashboardServe.DeleteCandidate(AdId).subscribe(res => {
          this.messageService.add({ key: 'del', severity: 'success', summary: '', detail: 'Deleted Success' });
          this.getAllAds();
        }, err => {
          console.log(err);
        })
      }
    });
  }

  // getUserId() {
  //   this.accountServe.currentUserId$.subscribe((userId) => {
  //     if (userId) {
  //       // debugger
  //       this.userId = userId;
  //     }
  //   }, error => {
  //     console.log(error);
  //   })
  // }


}
