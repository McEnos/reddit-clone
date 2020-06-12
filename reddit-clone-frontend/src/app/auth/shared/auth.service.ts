import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SignUpRequestPayload} from '../../models/signup-request.payload';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  signUp(signupRequestPayload: SignUpRequestPayload): Observable<any> {
    return this.http.post('http://localhost:8050/api/auth/signup', signupRequestPayload);
  }
}
