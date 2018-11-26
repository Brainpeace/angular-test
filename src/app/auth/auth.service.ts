import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private loggedIn = false;

    // constructor(private http: HttpClient) { }

    isAuthenticated(): boolean {
        this.loggedIn = JSON.parse(localStorage.getItem('loggedIn'));

        if (this.loggedIn === true) {
            return true;
        } else {
            return false;
        }

        // const token = localStorage.getItem('token');

        // Check whether the token is expired and return
        // true or false
        // return !this.jwtHelper.isTokenExpired(token);
    }
    /*
        isAuthenticated() {
            const promise = new Promise(
                (resolve, reject) => {
                    setTimeout(() => {
                        resolve(this.loggedIn);
                    }, 800);
                }
            );
            // console.log('doin\' it');
            return promise;
        }*/

    login() {
        localStorage.setItem('loggedIn', JSON.stringify(true));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('loggedIn');
    }
}
