import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ProjectForm } from './model/project-form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Assignment2';
  constructor(private fb:FormBuilder) { }
 
  ptu!:ProjectForm[]
  
  projectform!:FormGroup;

  emailpattern!:"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  projectnamepattern!:"^[a-zA-Z ]{2,20}$";
  
  ngOnInit(): void {


    this.projectform=this.fb.group({
      projectName:['',[Validators.required,Validators.pattern(this.projectnamepattern)]],
      email:['',[Validators.required,Validators.pattern(this.emailpattern)]]
   
    })
  }
  arr:ProjectForm[]=[];
  email:string ="";
  projectName:string="";
  projectStatus:string="";
  isClicked:boolean=false;
  onSubmit()
  {
     this.isClicked=true;
     console.log(this.projectName);
     console.log(this.projectStatus);
     console.log(this.email);
  }
}
