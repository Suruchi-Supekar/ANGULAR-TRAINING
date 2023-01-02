import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeForm } from '../model/employeeForm';
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb:FormBuilder,private cs:MyserviceService,private router:Router){}
  empform!:FormGroup;
  e!:EmployeeForm[];
  hide = true;
  ngOnInit(): void {
    this.empform = this.fb.group({
      userName:['',[Validators.required]],
      password:['', [Validators.required,Validators.minLength(6),Validators.maxLength(12),Validators.pattern("^[a-zA-Z0-9_.-]*$")
    ]], 
    });
    this.cs.employeeGetData().subscribe(
      {
        next:(res)=>
        {
            console.log(res)
            this.e=res
            console.log(res)
        },
        error:(err)=>
        {
          console.log(err)
        }
      }
    )
    console.log(this.e);
  
  }


  onSubmit(){
   this.e.forEach(element => {
    console.log(element.userName  )
    if(element.userName==this.empform.value.userName && element.password==this.empform.value.password)
    {
      this.router.navigate(['/']);
      window.alert("Successful login");
    }
   });
    this.cs.employeeSave(this.empform.value).subscribe();
   }
  

}

