import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'pm-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  {
 

  constructor( private router: Router,changeDetectorRef: ChangeDetectorRef) { }



}
