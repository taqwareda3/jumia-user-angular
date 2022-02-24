import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/Authontication/auth.service';
import { UsersService } from 'src/app/Services/Users/users.service';
import IUser from 'src/app/ViewModels/IUser';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  errorMessage: string = '';
  constructor(
    private AuthService: AuthService,
    private userService: UsersService,
    private router:Router
  ) {}

  ngOnInit(): void {}
  Signup(form: any) {
    console.log(form);
    let data: IUser ={...form,IsSeller:false};
    this.AuthService.Signup(form.email, form.password)
      .then((e) => {
        this.errorMessage = '';
        this.userService.AddUser(e.user!.uid, data).then(()=>{
   this.router.navigate(['/Products']);
        })
        console.log(e.user?.uid);
      })
      .catch((err) => (this.errorMessage = err.message));
  }
}
