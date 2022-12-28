import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(public http:HttpClient) { }

  employeeSave(data:any)
  {
    return this.http.post<any>("http://localhost:3000/posts",data).pipe(map((res:any)=> {
      return res
    }))
  }

}
