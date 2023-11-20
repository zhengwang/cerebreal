import { FILM_NEW } from 'src/app/services/constants';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'src/app/layout/modal/modal.component';

@Component({
  selector: 'app-newfilm',
  templateUrl: './newfilm.component.html',
  styleUrls: ['./newfilm.component.css']
})
export class NewfilmComponent implements OnInit {
  TITLE: string;
  newFilmForm: FormGroup;

  @ViewChild(ModalComponent) modal?: ModalComponent;

  constructor() {
    this.TITLE = FILM_NEW;
    this.newFilmForm = new FormGroup({
      title: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('click submit');
    console.log(this.newFilmForm.value);
  }

}
