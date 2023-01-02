import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'AngMaterialAssign3';
  constructor(public dialog: MatDialog) {}

  openDialog() {

    this.dialog.open(CEOExample,{
      width: '250px',
      height:'250px'
    });
  }

  openDialog1() {

    this.dialog.open(ContactExample,{
      width: '250px',
      height:'250px'
    });
  }
}

@Component({
  selector: 'CEOExample',
  templateUrl: 'ceo.html',
})

export class CEOExample {}

@Component({
  selector: 'Contactxample',
  templateUrl: 'contact.html',
})

export class ContactExample {}