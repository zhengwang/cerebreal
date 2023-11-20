import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() title?: string | null;
  @ContentChild('child') child?: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
