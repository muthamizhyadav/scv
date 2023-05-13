import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageStockComponent } from './manage-stock/manage-stock.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ManageCartComponent } from './manage-cart/manage-cart.component';
import { ManageScvComponent } from './manage-scv/manage-scv.component';
import { CartAllocationComponent } from './cart-allocation/cart-allocation.component';
import { ScvAttendanceComponent } from './scv-attendance/scv-attendance.component';
import { ScvAttendanceReportComponent } from './scv-attendance-report/scv-attendance-report.component';
import { MarketPriceComponent } from './market-price/market-price.component';
import { CartOrderComponent } from './cart-order/cart-order.component';
import { PostOrderComponent } from './post-order/post-order.component';
import { StockDistributionComponent } from './stock-distribution/stock-distribution.component';
import { StockManagerComponent } from './stock-manager/stock-manager.component';
import { ClosingStockComponent } from './closing-stock/closing-stock.component';
import { AddonStockComponent } from './addon-stock/addon-stock.component';
import { ConsolidatedOrdersComponent } from './consolidated-orders/consolidated-orders.component';
import { OrdersComponent } from './orders/orders.component';
import { StockItComponent } from './stock-it/stock-it.component';
import { SetSellingPriceComponent } from './set-selling-price/set-selling-price.component';
import { StockReportComponent } from './stock-report/stock-report.component';
import { SuddenOrderComponent } from './sudden-order/sudden-order.component';
import { CartReportComponent } from './cart-report/cart-report.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
import { AcknowledgeOrdersComponent } from './acknowledge-orders/acknowledge-orders.component';
import { EditOrdersComponent } from './edit-orders/edit-orders.component';
import { StockUpdateComponent } from './stock-update/stock-update.component';
import { AddOnStockComponent } from './add-on-stock/add-on-stock.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CartOnComponent } from './cart-on/cart-on.component';


@NgModule({
  declarations: [
    AppComponent,
    ManageStockComponent,
    HeaderComponent,
    SidebarComponent,
    ManageCartComponent,
    ManageScvComponent,
    CartAllocationComponent,
    ScvAttendanceComponent,
    ScvAttendanceReportComponent,
    MarketPriceComponent,
    CartOrderComponent,
    PostOrderComponent,
    StockDistributionComponent,
    StockManagerComponent,
    ClosingStockComponent,
    AddonStockComponent,
    ConsolidatedOrdersComponent,
    OrdersComponent,
    StockItComponent,
    SetSellingPriceComponent,
    StockReportComponent,
    SuddenOrderComponent,
    CartReportComponent,
    CustomerOrdersComponent,
    AcknowledgeOrdersComponent,
    EditOrdersComponent,
    StockUpdateComponent,
    AddOnStockComponent,
    LoginComponent,
    SignupComponent,
    VerifyOtpComponent,
    SetPasswordComponent,
    ForgotPasswordComponent,
    CartOnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
