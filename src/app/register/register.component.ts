import { Component } from '@angular/core';
import { RegisterService } from './Services/RegisterService';
import { UserDetails } from './Model/UserDetails';
import { SaveResponse } from '../Shared/SaveResponse';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  UserData: UserDetails = new UserDetails();
  constructor(
    private readonly RegisterService: RegisterService,
    private readonly router : Router){

  }
  async ngOnInit(){  
    await this.GetUserDetails();
  }

  async GetUserDetails(){
     this.RegisterService.GetUserDetails().subscribe((data)=>{
      console.log('USER_DETAILS',data);
     
     
    })
    
}
async Submit() {
  debugger;
  this.RegisterService.SaveUser(this.UserData).subscribe((data) => {
    console.log(data);
    let resp = new SaveResponse();
    resp = data;
    
    if (resp.Saved) { 
      alert("Registered!");
       //this.router.navigate(['login']);
    }
  });
}

redirectToLogin() {
  this.router.navigate(['/Login']); 
}
}
