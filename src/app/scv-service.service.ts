import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from './BaseURL';
import { Cookie } from 'ng2-cookies';
@Injectable({
  providedIn: 'root',
})
export class ScvServiceService {
  constructor(private http: HttpClient) {}

  token: any = Cookie.get('token');
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

  // fetch All Products
  FetchProduct() {
    return this.http.get(`${URL.baseURL}/v1/product`);
  }

  // addProduct

  addProduct(data: any) {
    return this.http.post(
      `${URL.baseURL}/v1/partnersetPrice/AddProductByPartner`,
      data,
      { headers: { auth: this.token } }
    );
  }

  // Products By
  AddedProduct(id: any) {
    return this.http.get(
      `${URL.baseURL}/v1/partnersetPrice/Fetch/Productby/Partner/${id}`,
      {
        headers: { auth: this.token },
      }
    );
  }
  // active cart
  createActiveCart(data: any) {
    return this.http.post(
      `${URL.baseURL}/v1/partnersetPrice/create/Active/Cart`,
      data,
      { headers: { auth: this.token } }
    );
  }

  getActiveCart() {
    return this.http.get(
      `${URL.baseURL}/v1/partnersetPrice/get/Active/CartBy_partner`,
      {
        headers: { auth: this.token },
      }
    );
  }

  // post Order

  createPostOrder(data: any) {
    return this.http.post(
      `${URL.baseURL}/v1/partnersetPrice/create/Partner/ShopOrder`,
      data,
      { headers: { auth: this.token } }
    );
  }

  getOrders(id: any) {
    return this.http.get(
      `${URL.baseURL}/v1/partnersetPrice/getOrdersbycart/${id}`
    );
  }

  // add on Stock

  getOrderedProducts(id: any, date: any) {
    return this.http.get(
      `${URL.baseURL}/v1/partnersetPrice/getOrdered/Products/${id}?date=${date}`
    );
  }
}
