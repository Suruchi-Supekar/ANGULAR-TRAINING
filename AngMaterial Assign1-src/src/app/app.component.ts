import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { EmployeeForm } from './model/employeeForm';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngMaterialAssign1';
  constructor(private fb:FormBuilder,private cs:MyserviceService){}

  empform!:FormGroup;


  ngOnInit(): void {

    // this.cs.employeeGetData().subscribe(list =>{
    //   this.emp=list
    //})
    this.empform = this.fb.group({
      fullName:['', [Validators.required,Validators.minLength(6),Validators.maxLength(32)]],
      email:['', [ Validators.required, Validators.email]],
      password:['', [Validators.required,Validators.minLength(6),Validators.maxLength(12),Validators.pattern("^[a-zA-Z0-9_.-]*$")
    ]],
      gender:['', [Validators.required]],
      dob:[''],
      mob:['',[Validators.required,Validators.pattern("@^[0-9]{10}$")]],
      skills:[''],

    })
    
  }

  onSubmit(){
    this.cs.employeeSave(this.empform.value).subscribe();
    window.location.reload();
   }
  

}
