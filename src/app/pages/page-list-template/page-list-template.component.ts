import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-list-template',
  templateUrl: './page-list-template.component.html',
  styleUrls: ['./page-list-template.component.scss']
})
export class PageListTemplateComponent implements OnInit {

  tittle_page: string = "titulo";
  constructor(){}

  ngOnInit(): void {
  }



}
