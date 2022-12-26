import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { EmployeeForm } from '../model/employee-form';
import { ServiceService } from '../service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  

  constructor(private fb:FormBuilder,private cs:ServiceService) { 
    
  }
  
  editClicked:Boolean=false;

  emp!:EmployeeForm[]
  
  employeeform!:FormGroup;

  namepattern!:"^[a-zA-Z ]{2,20}$";
  
  ngOnInit(): void {

    this.cs.employeeGetData().subscribe(list =>{

      this.emp=list
    })

    this.employeeform=this.fb.group({
      id:[''],
      name:['',[Validators.required,Validators.pattern(this.namepattern)]],
      addr:['',[Validators.required]],
      mob:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],

      
   
    })
    this.cs.empls.subscribe(data=>{console.log(data);
      this.editClicked=true;
      this.cs.getEmployee(data).subscribe({
        next:(res: any)=>{
          this.employeeform=this.fb.group({
            id:res.id,
            name:res.name,
            addr:res.addr,
            mob:res.mob
          })
        }
      });
    })
  }

  onSubmit()
  {
    if(this.editClicked==true)
    {
      this.cs.updateEmployee(this.employeeform.value.id,this.employeeform.value).subscribe();
      window.location.reload();
    }

    if(this.employeeform.valid)
    {
    this.cs.employeeSave(this.employeeform.value).subscribe();
    window.location.reload();
    }
 }
 Reset(){

  //this.cs.e=Object.assign({},null);
  window.location.reload();

}
// edit()
// {
//   this.cs.editEmployeeData(this.id,this.emp);
// }

// getEmployees(){
//   this.emps=this.cs.employeeGetData();
//    }
// delete(id:number){
//   this.cs.deleteEmployee(id)
//   .subscribe(book=>{
//     this.getEmployees();
//   })
// }
// deleteDataById(id :number)
// {
// this.cs.deleteEmployeeData(id).subscribe( data =>{
// console.log(data);
// window.location.reload();
// })
// }


}
