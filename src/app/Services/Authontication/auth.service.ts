import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject, Observable } from 'rxjs';
 

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private islogin =new BehaviorSubject<boolean>(false);
  get isLoggedIn() {
    return this.islogin.asObservable(); // {2}
  }
  
  constructor(private auth: AngularFireAuth) {
    // this.user =auth.user
  }

  Signup(email: string, password: string) {
   return this.auth.createUserWithEmailAndPassword(email, password)
  }
  // login user
  login(email:string,password:string){
    return this.auth.signInWithEmailAndPassword(email,password) 
    
    
    // ,this.isLog = true;
  }
  // 
  // AuthLoginfb() {
  //   return this.auth.signInWithPopup(new firebase)
  //   .then((result) => {
  //       console.log('You have been successfully logged in!')
  //   }).catch((error) => {
  //       console.log(error)
  //   })
  // }
  
  // logout user
  logout(){
    return this.auth.signOut().then(()=>{
      this.islogin.next(false)
    })
    // this.isLog=false
  }
}
