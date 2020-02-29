import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
    providedIn: 'root'
  })
  export class ApiRestService 
  {

    link: ''


    constructor (public http: HttpClient) {  }

    login(UserData) 
    {
        return this.http.post(`${this.link}/user/login`, UserData);
    }

  }

 