import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  empform!:FormGroup;

  isOptional=false;

  constructor(private formBuilder:FormBuilder,private cs:MyserviceService){}

    firstFormGroup!: FormGroup;

    ngOnInit() {
      this.firstFormGroup = this.formBuilder.group({
        fullName: ["", Validators.required],
        email: ["", Validators.required],
        fathersName: ["", Validators.required],
        mothersName: ["", Validators.required],
          gender: ["", Validators.required],
          dob: ["", Validators.required],
          mob: ["", Validators.required],
          accountNo:["", Validators.required],
          bankName:["", Validators.required],
          ifsc:["", Validators.required],
          internetBanking:["", Validators.required],
          mobileBanking:["", Validators.required],
          presentAddress:["", Validators.required],
          permanentAddress:["", Validators.required]

      });

  }

  onSubmit(){
    //this.cs.employeeSave(this.empform.value).subscribe();
    this.cs.employeeSave(this.firstFormGroup.value).subscribe();
    window.location.reload();
 }

 //for letter counting

 maxNumberOfCharacters = 60;
 counter = true;

 numberOfCharacters1 = 0;
 numberOfCharacters2 = 0;
 interaction = {
   textValue: ''
}

onKeyUp(event: any): void {
  this.numberOfCharacters1 = event.target.value.length;

  if (this.numberOfCharacters1 > this.maxNumberOfCharacters) {
    event.target.value = event.target.value.slice(0, this.maxNumberOfCharacters);
    this.numberOfCharacters1 = this.maxNumberOfCharacters;
    window.alert("maximum limit exceeded");
  }
}

onKeyUp2(event: any): void {
  this.numberOfCharacters2 = event.target.value.length;

  if (this.numberOfCharacters2 > this.maxNumberOfCharacters) {
    event.target.value = event.target.value.slice(0, this.maxNumberOfCharacters);
    this.numberOfCharacters2 = this.maxNumberOfCharacters;
    window.alert("maximum limit exceeded");
  }
}
}
