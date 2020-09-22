import { User } from './user';

import { RegisterComponent } from './register/register.component';
import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user$= new Subject<User>();

  constructor() { }
  login(email:string, password:string){
    const loginCredentials= {email, password};
    console.log("login credentials" , loginCredentials);
    
    return of(loginCredentials);
  }

  logout(){
    // remove user from subjetc
    this.setUser(null);
    console.log("User has been logged out");
    
  }

get user(){
  return this.user$.asObservable();
}

  register(user: any){
   // make a api call to save user in db
   //update the user object
   this.setUser(user);
    console.log('registered user successfully', user);
    
    return of(user);
  }

  private setUser(user){
    this.user$.next(user);
  }
}
