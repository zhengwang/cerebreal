import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FILM_ICON, ROTATE_ICON } from 'src/app/services/constants';
import { NewfilmComponent } from '../newfilm/newfilm.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  HEADER_ICON: string;
  access_token: string | null;
  @ViewChild('film_tbl') tbl_el?: ElementRef;
  @ViewChild(NewfilmComponent) model_el?: NewfilmComponent;

  constructor() {
    this.HEADER_ICON = FILM_ICON;
    this.access_token = localStorage.getItem('access_token');
  }

  ngOnInit(): void { }

  ngAfterViewInit() {

    const film_modal = new (window as any).bootstrap.Modal(this.model_el?.modal?.modal_el?.nativeElement);

    (<any>$(this.tbl_el?.nativeElement)).DataTable({
      serverSide: true,
      responsive: true,
      ajax: {
        url: '/api/inventory/films',
        type: 'get',
        headers: {
          Authorization: `Bearer ${this.access_token}`
        }
      },
      dom: '<<"row"<"col-sm-5"B><"col-sm-7"l>><t><"row"<"col-sm-5"i><"col-sm-7"p>>>',
      buttons: {
        dom: { button: { className: '' } },
        buttons: [
          {
            text: ROTATE_ICON,
            className: 'btn btn-sm btn-secondary',
            action: (_: any) => console.log()
          }, {
            text: 'Add a film',
            className: 'btn btn-sm btn-primary',
            action: () => film_modal.show()
          }
        ],
      },
      language: {
        emptyTable: 'No film available.',
        lengthMenu: 'Display _MENU_ films',
        info: 'Showing page _START_ to _END_ of _TOTAL_ films.',
        infoEmpty: 'No film available.'
      },
      columns: [
        { data: 'film_id', title: 'Film #', className: 'dt-center text-nowrap align-middle', width: '1%' },
        { data: 'title', title: 'Title', className: 'dt-center align-middle', width: '15%' },
        { data: 'description', title: 'Description', className: 'dt-head-center dt-body-left' },
        { data: 'release_year', title: 'Release year', className: 'dt-center text-nowrap align-middle' },
        { data: 'language', title: 'Language', className: 'dt-center text-nowrap align-middle' },
        { data: 'special_features', title: 'Special features', className: 'none' }
      ],
      drawCallback: () => {
        $('div.dt-buttons').removeClass('btn-group');
      }
    });
  }

}
