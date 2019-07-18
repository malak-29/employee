import { Component,OnInit} from '@angular/core';
import {EmployeeService} from './../../services/employee.service';
import {FormGroup, FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
  employee:FormGroup;
  isOpen:boolean=false;
  constructor(private employeeservice:EmployeeService) { }

  ngOnInit(){
    this.employee = new FormGroup({
      id: new FormControl('',[Validators.required]),
      name: new FormControl(),
      age: new FormControl(),
      salary: new FormControl()
    });
  }

  toggle(): void  {
    this.isOpen = !this.isOpen;
    if(this.isOpen){
      (document.querySelector('.modal') as HTMLElement).style.display="block";
    }
    else{
      (document.querySelector('.modal') as HTMLElement).style.display="none";
    }      
  }
  close(): void {
    this.isOpen=false;
    (document.querySelector('.modal') as HTMLElement).style.display="none";
    this.employee.reset();
  }

  add(): void{ 
    this.employeeservice.addEmployee(this.employee.value);
    (document.querySelector('.modal') as HTMLElement).style.display="none";
    this.employee.reset();
  }
}
