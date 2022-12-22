import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';  
import { Employee } from './model/Employee';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Assignment1';
  email:string="";
  arr: Employee[] = [];  
  password:string="";
  subscriptions:string="";
  isClicked:Boolean=false;
  emailpattern!:"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  form = new FormGroup({  
    //this.subscriptions:new FormControl('', Validators.required);
  });  
  userlogin: string="";
    
  onClickSubmit()
  {
    this.isClicked=true;
    let emp=new Employee();
    emp.email=this.email;
    emp.subscriptions=this.subscriptions;
    emp.password=this.password;
    this.arr.push(emp);
    console.log(this.arr);
  }
  constructor()

  {

  }

  ngOnChanges()  //angular sets or resets data bound input properties

  {

  }

  ngOnInit(): void { //Initialize the directive or component after displays the data bound properties


  }

  ngDoCheck()//Detect and act upon changes

  {

    console.log('ngDocheck');

  }

  ngAfterContentInit()//Respond external content into the componenrs view

  {

    console.log('ngAfterContentInit');

  }

  ngAfterContentChecked() //respond after angular checks the content projected into the directive

  {

    console.log('ngAfterContentchecked');

  }

  ngAfterViewinit()//respond after angualar initializes the components view

  {

    console.log('ngAfterViewInit');

  }

  ngAfterViewChecked() //respond after angular checks the components views that contains the directive

  {

    console.log('ngAfterViewChecked');

  }

  ngOnDestroy() //to avoid memory leaks and destroys the directive or component

  {

    console.log('ngondestroy');

  }
}
