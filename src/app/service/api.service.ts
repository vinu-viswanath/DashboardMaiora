import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyElements } from 'src/model/myElements';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:3000/elements'

  constructor(private http:HttpClient) { }

  //fetching data

  getAllElements():Observable<MyElements>{
    return this.http.get(this.baseUrl)

  }

}
