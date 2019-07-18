import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {Emp} from './../models/Emp'
import {saveAs} from 'file-saver';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpService: HttpClient) { }

  employeeList:Emp[];

  setEmployeeList(){
    return new Promise ((resolve,reject)=>{
      this.httpService.get('./assets/employee.json').subscribe(
        data => {
          this.employeeList = data as Emp [];  
          resolve();  
        },
        (err: HttpErrorResponse) => {
          console.log (err.message);
        }
      );
      
    });    
  }

  getEmployeeList():Emp[]{
    return this.employeeList;
  }

  addEmployee(emp){
    
    console.log("add: ",emp);
    if(emp.age<18){
      emp.status="Under";
    }
    else if(emp.age>17 && emp.age<35){
      emp.status="Perfect";
    }
    else{
      emp.status="Over";
    }
    this.employeeList.push(emp as Emp);
    var list:any =JSON.stringify(this.employeeList)
    var blob = new Blob([list], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "employee.json");
    
  }

}
