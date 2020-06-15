import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SignUpRequestPayload} from '../../models/signup-request.payload';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpRequestPayload: SignUpRequestPayload;
  signUpForm: FormGroup;

  constructor(private  authService: AuthService, private router: Router, private toastr: ToastrService) {
    this.signUpRequestPayload = {
      username: '',
      email: '',
      password: ''
    };
  }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    })
    ;
  }

  signUp() {
    this.signUpRequestPayload.username = this.signUpForm.get('username').value;
    this.signUpRequestPayload.email = this.signUpForm.get('email').value;
    this.signUpRequestPayload.password = this.signUpForm.get('password').value;
    this.authService.signUp(this.signUpRequestPayload).subscribe(() => {
      this.router.navigate(['/login'], {queryParams: {registered: 'true'}});
    }, () => {
      this.toastr.error('Registration Failed! Please try again');
    });
  }
}
