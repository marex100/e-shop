import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email: string;
password: string;
  constructor(private router: Router, private AuthService: AuthService) { }
  
  ngOnInit()  {}

    login(){
      this.AuthService.login(this.email, this.password)
      .subscribe(s => this.router.navigate(['']));
      this.router.navigate(['']);
      console.log("test");
      
    
  }

}
