import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/Services/Authontication/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   
  isLoggedIn?: Observable<boolean>; 
 
  constructor(private as:AuthService,
    private router:Router) { }

  ngOnInit():  any{
     this.isLoggedIn=this.as.isLoggedIn;
  }
  logout(){
    
    return this.as.logout().then(()=>{
      // this.isLoggedin =false;
      localStorage.clear();
      console.log("logout")
      this.router.navigate(["/login"])
    }) 
  }


}
// function isLoggedIn() {
//   throw new Error('Function not implemented.');
// }

