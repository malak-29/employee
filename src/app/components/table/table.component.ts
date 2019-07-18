import { Component, OnInit } from '@angular/core';
import {Emp} from './../../models/Emp';
import {EmployeeService} from './../../services/employee.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  employeeList:Emp[];
  constructor(private employeeservice:EmployeeService) { }

  ngOnInit() {
    this.employeeservice.setEmployeeList().then(()=>{
      this.employeeList = this.employeeservice.getEmployeeList();
      console.log(this.employeeList);
    });

    
    
  }

}
