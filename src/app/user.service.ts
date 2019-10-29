import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import sampleData from '../../users.json';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    users = sampleData;
    
    constructor(private http: HttpClient) { }

    getData() {
        return this.users;
    }

}
