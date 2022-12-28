import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { EmployeeForm } from './model/employeeForm';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(public http:HttpClient) { }
  url:string="http://localhost:3000";

  employeeSave(data:any)
  {
    return this.http.post<any>("http://localhost:3000/posts",data).pipe(map((res:any)=> {
      return res
    }))
  }

 
}
