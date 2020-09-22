

import { TestBed, async } from '@angular/core/testing';
import {MediaMatcher} from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'pm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy {
  user: User;
  userSubscription: Subscription;

  constructor(private authService: AuthService, private router: Router,changeDetectorRef: ChangeDetectorRef, media: MediaMatcher){


  }
  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
 
openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}
closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

  logout(){
    this.authService.logout();
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void{
if(this.userSubscription){
  this.userSubscription.unsubscribe();

}    

  }

}
