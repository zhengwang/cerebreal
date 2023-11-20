import { Component, ContentChild, ElementRef, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() title?: string;
  @ViewChild('modal') modal_el?: ElementRef;
  @ContentChild('child') child?: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
