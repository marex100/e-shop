import { Component,ChangeDetectorRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { User } from '../user';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'pm-toolbar-component',
  templateUrl: './toolbar-component.component.html',
  styleUrls: ['./toolbar-component.component.css']
})
export class ToolbarComponentComponent {
  user: User;
  userSubscription: Subscription;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe('(max-width: 2020px)')
    .pipe(
      map(result => result.matches),
      shareReplay(1)
    );

  constructor(private authService: AuthService, private router: Router,changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private breakpointObserver: BreakpointObserver) {}

}
