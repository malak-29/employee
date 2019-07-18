import { Component, OnInit, Input } from '@angular/core';
import {Emp} from './../../models/Emp';
@Component({
  selector: 'tr[app-emprecord]',
  templateUrl: './emprecord.component.html',
  styleUrls: ['./emprecord.component.css']
})
export class EmprecordComponent implements OnInit {
  @Input() employee:Emp
  constructor() { }

  ngOnInit() {
  }

}
