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
    return this.http.post(`${URL.baseURL}/v1/scv/Add/cart`, data, {
      headers: { auth: this.token },
    });
  }
  // fetch Cart
  getScvCarts() {
    return this.http.get(`${URL.baseURL}/v1/scv/getScvCarts/All`, {
      headers: { auth: this.token },
    });
  }
  // Remove Cart

  removeCart(id: any) {
    return this.http.get(`${URL.baseURL}/v1/scv/DisableCart/${id}`);
  }
  // Edite Scv Cart

  EditeScvCart(id: any, data: any) {
    return this.http.put(`${URL.baseURL}/v1/scv/updateSCVCart/${id}`, data);
  }

  cartOn(id: any, data: any) {
    return this.http.put(`${URL.baseURL}/v1/scv/cartOn/${id}`, data);
  }

  // Manage SCV

  AddSCV(data: any) {
    return this.http.post(`${URL.baseURL}/v1/scv/add/scv/byPartner`, data, {
      headers: { auth: this.token },
    });
  }

  getAllSCV() {
    return this.http.get(`${URL.baseURL}/v1/scv/getAllScv/ByPartners`, {
      headers: { auth: this.token },
    });
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
    return this.http.get(`${URL.baseURL}/v1/scv/getcarts/Allocation`, {
      headers: { auth: this.token },
    });
  }

  getAvailableSCV() {
    return this.http.get(`${URL.baseURL}/v1/scv/getAvailable/Scv`, {
      headers: { auth: this.token },
    });
  }

  CartAllocationToSCV(data: any) {
    return this.http.post(`${URL.baseURL}/v1/scv/Cart/Allocation/Scv`, data);
  }

  getCartById(id: any) {
    return this.http.get(`${URL.baseURL}/v1/scv/getScvCartbyId/${id}`);
  }

  RemoveScvFromCart(data: any) {
    return this.http.post(`${URL.baseURL}/v1/scv/Remove/ScvFrom/Cart`, data);
  }

  // Scv Attendance
  getAllScvAttendance() {
    return this.http.get(`${URL.baseURL}/v1/scv/SCV/Attendance/mange`, {
      headers: { auth: this.token },
    });
  }

  getScv_Attendance_Report(data: any) {
    return this.http.post(
      `${URL.baseURL}/v1/scv/getScv/Attendance/Reports`,
      data
    );
  }

  UpdateAttendance(data: any) {
    return this.http.post(`${URL.baseURL}/v1/scv/scv/attendance`, data);
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

  // distribution Api's

  getOrderedProductByCart(cartId: any, date: any) {
    return this.http.get(
      `${URL.baseURL}/v1/partnersetPrice/distributions/getOrder/For/CurrentDateByCart?cartId=${cartId}&date=${date}`
    );
  }

  GiveStockForProducts(data: any) {
    return this.http.post(
      `${URL.baseURL}/v1/partnersetPrice/DistributeGIven`,
      data
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

  giveStock(data: any) {
    return this.http.post(
      `${URL.baseURL}/v1/partnersetPrice/updateAddOnStock`,
      data
    );
  }

  // close Stock

  closeStock(data: any) {
    return this.http.post(
      `${URL.baseURL}/v1/partnersetPrice/Return_Wastage_inCloseStock`,
      data
    );
  }

  // Partner Order Request Api's

  getProducts_For_PartnerOrder(date: any) {
    return this.http.get(
      `${URL.baseURL}/v1/partnersetPrice/getCart/Ordered/Products?date=${date}`,
      {
        headers: { auth: this.token },
      }
    );
  }

  createOrdersFromAdmin(data: any) {
    return this.http.post(
      `${URL.baseURL}/v1/partnersetPrice/createPartnerOrder/FromAdmin`,
      data,
      { headers: { auth: this.token } }
    );
  }

  getPartnerByPartner() {
    return this.http.get(
      `${URL.baseURL}/v1/partnersetPrice/getOrders/ByPartner`,
      {
        headers: { auth: this.token },
      }
    );
  }
  updateBalanceStock(data: any) {
    return this.http.post(
      `${URL.baseURL}/v1/partnersetPrice/stockUpdateByCart`,
      data
    );
  }

  getCartReport(id: any) {
    return this.http.get(
      `${URL.baseURL}/v1/partnersetPrice/getCartReports/${id}`
    );
  }

  // getCartBy/Allocated/Scv/:id
  getCartOnDetails(id: any) {
    return this.http.get(`${URL.baseURL}/v1/scv/getCartBy/Allocated/Scv/${id}`);
  }

  cartByProduct(date: any, id: any) {
    return this.http.get(
      `${URL.baseURL}/v1/partnersetPrice/getCartOrderBy/Product?date=${date}&productId=${id}`,
      { headers: { auth: this.token } }
    );
  }

  getOrderByOrderId(id: any) {
    return this.http.get(
      `${URL.baseURL}/v1/partnersetPrice/getOrderDetails/ByOrderId/${id}`
    );
  }

  ReceivedOrdesSubmit(data: any) {
    return this.http.post(
      `${URL.baseURL}/v1/partnersetPrice/ReceivedDetails/Update`,
      data
    );
  }
}
