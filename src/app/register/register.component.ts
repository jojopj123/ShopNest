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
    private RegisterService: RegisterService,
    private router : Router){

  }
  async ngOnInit(){  
    await this.GetUserDetails();
  }

  async GetUserDetails(){
    await this.RegisterService.GetUserDetails().subscribe((data)=>{
      console.log('USER_DETAILS',data);
     
     
    })
    
}
async Submit(){
  debugger;
  await this.RegisterService.SaveUser(this.UserData).subscribe((data)=>{
    console.log(data);
    let resp = new SaveResponse();
    resp=data;
   if( resp.Saved==true){
    alert("Registered!");
    // this.router.navigate(['login']);
   }
  })
  
}
redirectToLogin() {
  this.router.navigate(['/Login']); 
}
}
