import { Component,OnInit } from '@angular/core';
import { bufferToggle } from 'rxjs';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  num:number=0;
  arr:number[]=[];
  name1:string="";
  isValid:Boolean=false;
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
  displayDetails()
  {
   this.name1="Your Name:Suruchi";
   this.arr.push(++this.num);
  //  ++this.click;
  //  if(this.click%2==0)
  //  {
  //   this.clickCheck=true;
  //  }
  }
  getColor()
  {
    return 'blue';
  }
  getColor1()
  {
    return 'white';
  }
}
