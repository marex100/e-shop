import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'pm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm = new FormGroup({
    fullname: new FormControl('', [Validators.required]), 
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
 
  constructor(private router: Router, private AuthService: AuthService) {
    console.log('userform', this.userForm );    
   }

   register(){
     const user=this.userForm.getRawValue();
     this.AuthService
     .register(user)
     .subscribe(s => this.router.navigate(['/login']));

   }

  ngOnInit(): void {
  }

}

