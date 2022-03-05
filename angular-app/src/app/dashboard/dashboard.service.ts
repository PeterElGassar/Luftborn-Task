import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  baseUrl = environment.baseUrl;
  token: string;
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
  }




  createAd(value: any) {


    return this.http.post(this.baseUrl, value)
  }

  updatedAd(value: any) {

    return this.http.post(this.baseUrl, value)
  }


  getAllCandidate() {
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", `Bearer ${this.token}`);
    debugger;
    return this.http.get(this.baseUrl + "Candidate/getAllCandidateProfiles", { headers });
  }


  getCandidate(id: any) {
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", `Bearer ${this.token}`);
    return this.http.get(this.baseUrl + `media/getMedia?id=${id}`);
  }


  CreateCandidate(val: any) {
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", `Bearer ${this.token}`);
    debugger
    return this.http.post(this.baseUrl + "Candidate/CreateCandidateProfile", val, { headers });
  }


  UpdateCandidate(val: any) {
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", `Bearer ${this.token}`);

    return this.http.put(this.baseUrl + "Candidate/UpdateCandidateProfile", val, { headers });
  }


  DeleteCandidate(id: any) {
    let headers = new HttpHeaders();
    headers = headers.set("Authorization", `Bearer ${this.token}`);

    return this.http.delete(this.baseUrl + `Candidate/DeleteCandidateProfile?id=${id}`, { headers });
  }





}
