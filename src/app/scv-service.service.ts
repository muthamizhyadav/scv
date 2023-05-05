import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from './BaseURL';
@Injectable({
  providedIn: 'root',
})
export class ScvServiceService {
  constructor(private http: HttpClient) {}

  // manage Scv Cart
  SendSCVFrm(data: any) {
    return this.http.post(`${URL.baseURL}/v1/scv/Add/cart`, data);
  }
  // fetch Cart
  getScvCarts() {
    return this.http.get(`${URL.baseURL}/v1/scv/getScvCarts/All`);
  }
  // Remove Cart

  removeCart(id: any) {
    return this.http.get(`${URL.baseURL}/v1/scv/DisableCart/${id}`);
  }
  // Edite Scv Cart

  EditeScvCart(id: any, data: any) {
    return this.http.put(`${URL.baseURL}/v1/scv/updateSCVCart/${id}`, data);
  }

  // Manage SCV

  AddSCV(data: any) {
    return this.http.post(`${URL.baseURL}/v1/scv/add/scv/byPartner`, data);
  }

  getAllSCV() {
    return this.http.get(`${URL.baseURL}/v1/scv/getAllScv/ByPartners`);
  }

  Active_InActive(id: any, data: any) {
    return this.http.put(
      `${URL.baseURL}/v1/scv/active/Inactive/Scv/ByPartner/${id}`,
      data
    );
  }

  EditScv(id: any, data: any) {
    return this.http.put(
      `${URL.baseURL}/v1/scv/update/scv/byPartner/${id}`,
      data
    );
  }

  // Cart Allocation
  getNewAllocations() {
    return this.http.get(`${URL.baseURL}/v1/scv/getcarts/Allocation`);
  }

  getAvailableSCV() {
    return this.http.get(`${URL.baseURL}/v1/scv/getAvailable/Scv`);
  }
  CartAllocationToSCV(data: any) {
    return this.http.post(`${URL.baseURL}/v1/scv/Cart/Allocation/Scv`, data);
  }

  // Scv Attendance
  getAllScvAttendance() {
    return this.http.get(`${URL.baseURL}/v1/scv/SCV/Attendance/mange`);
  }
}
