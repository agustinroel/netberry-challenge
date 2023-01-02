import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'netberry-challenge';
  constructor(public auth: AuthService, @Inject(DOCUMENT) private doc: Document) {
      
  }

  ngOnInit(): void {
    
  }

  logout(): void {
    this.auth.logout({ returnTo: this.doc.location.origin });
  }
}



