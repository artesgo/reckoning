import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$ = this.auth.authState;

  constructor(private auth: AngularFireAuth) { }

  login(email: string, pass: string) {
    this.auth.signInWithEmailAndPassword(email, pass)
      .then((result) => {
        console.log('login', result);
      })
      .catch((err) => {
        console.log('err', err);
      })
  }

  logout() {
    this.auth.signOut().then(() => {
      console.log('logout')
    });
  }

  signup(email, pass) {
    this.auth.createUserWithEmailAndPassword(email, pass)
      .then((result) => {
        console.log('signup', result);
      });
  }
}
