import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from './BaseURL';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private http: HttpClient) {}

  SignUp(data: any) {
    return this.http.post(`${URL.baseURL}/v1/scv/RegisterScv`, data);
  }
  verify_OTP(data: any) {
    return this.http.post(`${URL.baseURL}/v1/scv/Otpverify`, data);
  }
  SetPassword(data: any) {
    return this.http.post(`${URL.baseURL}/v1/scv/setPassword`, data);
  }

  login(data: any) {
    return this.http.post(`${URL.baseURL}/v1/scv/LoginCustomer`, data);
  }
}
