import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  @ContentChild('child') child?: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
