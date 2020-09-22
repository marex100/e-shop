import { User } from './user';
import { AuthService } from './auth.service';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styles:[]
})


export class AppComponent implements OnDestroy {
  user: User;
  userSubscription: Subscription;
  constructor(private authService: AuthService, private router: Router){

    this.userSubscription=this.authService.user.subscribe(user=>(this.user=user));

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
