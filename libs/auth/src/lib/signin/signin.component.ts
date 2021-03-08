import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'artesgo-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  login: FormGroup;
  email: FormControl;
  password: FormControl;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {    
    this.login = this.fb.group({
    email: this.email,
    password: this.password,
  });
  }


  signin() {
    const email = this.login.get('email').value;
    const password = this.login.get('password').value;
    // if (this.data.signin) {
    //   this.auth.signIn(email, password);
    // } else if (this.data.signup) {
    //   this.auth.signUp(email, password);
    // } else {
    //   this.auth.signOut();
    // }
  }
}
