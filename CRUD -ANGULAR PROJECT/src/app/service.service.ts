import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { EmployeeForm } from './model/employee-form';
import { Observable, Subject } from 'rxjs';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http:HttpClient) { }

  headers=new HttpHeaders().set('Content-Type','application/json').set('Accept','application/json');
  httpOptions={
    headers:this.headers
  }

  url:string="http://localhost:3000";
  e:EmployeeForm[];
  empls=new Subject();
  
  employeeSave(emp:EmployeeForm)
  {
      return this.http.post<EmployeeForm>(this.url+"/getAllData",emp);
  }

  employeeGetData():Observable<EmployeeForm[]>
  {
     return this.http.get<EmployeeForm[]>(this.url+"/getAllData");
  }

 deleteEmployee(id:any):Observable<EmployeeComponent>
 {  const url=`${this.url}/getAllData/${id}`;
     return this.http.delete<EmployeeComponent>(url);
 }

 

 getEmployee(id:any):Observable<EmployeeComponent>
 {  const url=`${this.url}/getAllData/${id}`;
     return this.http.get<EmployeeComponent>(url);
 }
 
 updateEmployee(id:any, e:EmployeeForm):Observable<EmployeeForm[]>{
  const url=`${this.url}/getAllData/${id}`;
     return this.http.put<EmployeeForm[]>(url,e);
 }
 setEmployee(empls)
 {
   this.empls.next(empls);
 }
 

}
