import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../shared/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginRequestPayload} from '../../models/login-request-payload';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isError: boolean;
  loginForm: FormGroup;
  loginRequestPayload: LoginRequestPayload;
  constructor(private authService: AuthService) {
    this.loginRequestPayload = {
      username: '',
      password: ''
    };
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
    /*    this.activatedRoute.queryParams
          .subscribe(params => {
            if (params.registered !== undefined && params.registered === 'true') {
              console.log('Signup Successful');
              this.registerSuccessMessage = 'Please Check your inbox for activation email '
                + 'activate your account before you Login!';
            }
          });*/
  }

  login() {
    this.loginRequestPayload.username = this.loginForm.get('username').value;
    this.loginRequestPayload.password = this.loginForm.get('password').value;
    this.authService.login(this.loginRequestPayload).subscribe(data => {
      console.log('Login successful');
    });
  }
}
