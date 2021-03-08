import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user;
  constructor(private angularFireAuth: AngularFireAuth) {
    this.user = angularFireAuth.authState;
  }
  /* Sign up */
  signUp(email: string, password: string): Observable<any> {
    return from(this.angularFireAuth
      .createUserWithEmailAndPassword(email, password));
  }
  /* Sign in */
  signIn(email: string, password: string): Observable<any> {
    return from(this.angularFireAuth
      .signInWithEmailAndPassword(email, password));
  }
  /* Sign out */
  signOut() {
    return from(this.angularFireAuth.signOut());
  }
}
