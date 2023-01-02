import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
baseUrl = 'http://localhost:3000'
tasksEndpoint = '/data';

  constructor(private http: HttpClient) { }

  listTasks(): Observable<any>{
    return this.http.get(`${this.baseUrl}${this.tasksEndpoint}`)
  }

  createTask(item: any): Observable<any>{
    return this.http.post(this.baseUrl+this.tasksEndpoint, item)
  }

  updateTask(item: any): Observable<any>{
    return this.http.put(`${this.baseUrl}${this.tasksEndpoint}`+'/'+`${item.id}`, item)
  }

  deleteTask(item: any): Observable<any>{
    return this.http.delete(`${this.baseUrl}${this.tasksEndpoint}`+'/'+`${item.id}`)
  }
}

