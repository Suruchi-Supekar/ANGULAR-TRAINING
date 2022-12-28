import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fb:FormBuilder,private cs:MyserviceService){}
  empform!:FormGroup;

  ngOnInit(): void {
    this.empform = this.fb.group({
      userName:['',[Validators.required]],
      password:['', [Validators.required,Validators.minLength(6),Validators.maxLength(12),Validators.pattern("^[a-zA-Z0-9_.-]*$")
    ]]
    })
  
  }


  onSubmit(){
    this.cs.employeeSave(this.empform.value).subscribe();
   }
  

}
