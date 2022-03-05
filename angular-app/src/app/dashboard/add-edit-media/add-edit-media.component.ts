import { DashboardService } from './../dashboard.service';

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { IUser } from 'src/app/Shared/IUser';
import {DropdownModule} from 'primeng/dropdown';

@Component({
  selector: 'app-add-edit-media',
  templateUrl: './add-edit-media.component.html',
  styleUrls: ['./add-edit-media.component.css'],
  providers:[MessageService]
})
export class AddEditMediaComponent implements OnInit {

@Input() candidate :IUser;

candidateForm: FormGroup;
educationLevels:any[];
  constructor(private fm: FormBuilder,
    private dashboardServe:DashboardService,
    private messageService:MessageService) { }

  ngOnInit(): void {
    this.createCandidateForm();
    this.getCandidate();
this.educationLevels=[
  "Bachelor",
  "Master's",
  "Doctoral ",

]


  }


  createCandidateForm() {
    this.candidateForm = this.fm.group({
      firstName: [null],
      middleName: [null],
      lastName: [null, [Validators.required]],
      country: [null, [Validators.required]],
      educationLevel: [null, [Validators.required]],
      id: [0]
    })
  }


  addCandidate() {
    debugger;
    console.log(this.candidateForm.value);
    
    this.dashboardServe.CreateCandidate(this.candidateForm.value).subscribe((res) => {
      console.log(res);
      this.alertMessage("Ad Create Success","success");
    },err=>{
      console.log(err);
      this.alertMessage("Some thing Wrong", "error");
    });
  }


  updateCandidate() {
    debugger;
    console.log(this.candidateForm.value);
    this.dashboardServe.UpdateCandidate(this.candidateForm.value).subscribe((res) => {
      console.log(res);
      this.alertMessage("Ad Updated Success","success");

    },err=>{
      console.log(err);  
      this.alertMessage("Some thing Wrong", "error");

    });
  }



getCandidate(){

  if(this.candidate.id > 0)
  {
    this.candidateForm.patchValue(this.candidate); console.log(this.candidateForm.value);
    debugger;
    // this.meidaForm.controls.from_time.setValue(new Date(this.media.from_time));
    // this.meidaForm.controls.to_time.setValue(new Date(this.media.to_time));

  }

}
    //alert Message
    alertMessage(message: string, alertType: string) {
      this.messageService.add({
        key: 'ImageSaveSuccess',
        severity: alertType,
        summary: '',
        detail: message,
      });
    }

}
