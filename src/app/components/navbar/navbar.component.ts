import { Component, Input} from '@angular/core';
import {AddEmpComponent} from './../add-emp/add-emp.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  @Input() addEmp:AddEmpComponent;
  constructor() { }


  click(): void {
    this.addEmp.toggle(); 
  }


}
