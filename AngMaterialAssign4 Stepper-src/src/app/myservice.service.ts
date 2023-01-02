import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Stepper } from './model/stepper';
import { EmployeeForm } from './model/employeeForm';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(public http:HttpClient) { }
  emp!:EmployeeForm[];
  employeeSave(data:any)
  {
    return this.http.post<any>("http://localhost:3000/posts",data).pipe(map((res:any)=> {
      return res
    }))
  }
  employeeGetData():Observable<any[]>
  {
     return this.http.get<any[]>("http://localhost:3000/posts");
  }
}
