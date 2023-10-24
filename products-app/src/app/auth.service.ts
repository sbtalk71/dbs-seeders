import {Injectable} from '@angular/core';
import {User} from './user';

@Injectable({providedIn: 'root'})
export class AuthService {

    private email = 'user@gmail.com';
    private password = 'welcome1';

    constructor() {}

    login(user : User): boolean {
        if (this.email === user.email) {
            if (this.password === user.password) {
                return true
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    loggedIn(){
      return !!localStorage.getItem('token');
    }

    getToken(){
      return localStorage.getItem('token');
    }
}
