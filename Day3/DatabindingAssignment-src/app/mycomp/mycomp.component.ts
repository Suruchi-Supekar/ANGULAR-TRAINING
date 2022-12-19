import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.css']
})
export class MycompComponent implements OnInit {
  username:string="";
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
  display()
  {
    this.username="";
  }
}
