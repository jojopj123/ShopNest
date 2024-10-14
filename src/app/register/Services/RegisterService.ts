import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/Environment/environment';
import { UserData } from '../Model/Userdata';
import { UserDetails } from '../Model/UserDetails';
import { SaveResponse } from 'src/app/Shared/SaveResponse';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = environment.apiUrl; // Replace with your API URL
  
  constructor(private http :HttpClient) { }

  GetUserDetails( ): Observable<UserData[]> {
    const url = environment.apiUrl+"/User/GetUserDetails";
    return this.http.get<UserData[]>(url , {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }) 
    });
  }

  SaveUser( data: UserDetails): Observable<SaveResponse> {
    debugger;
    const url = `${this.apiUrl}/User/SaveUserDetails`;
    return this.http.post<SaveResponse>(url, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }) 
    });
  }
}