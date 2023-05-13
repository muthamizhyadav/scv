import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageStockComponent } from './manage-stock/manage-stock.component';
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

const routes: Routes = [
  { path: 'manage-stock', component: ManageStockComponent },
  { path: 'manage-cart', component: ManageCartComponent },
  { path: 'manage-scv', component: ManageScvComponent },
  { path: 'cart-allocation', component: CartAllocationComponent },
  { path: 'scv-attendance', component: ScvAttendanceComponent },
  { path: 'scv-attendance-report', component: ScvAttendanceReportComponent },
  { path: 'market-price', component: MarketPriceComponent },
  { path: 'cart-order', component: CartOrderComponent },
  { path: 'post-order', component: PostOrderComponent },
  { path: 'stock-distribution', component: StockDistributionComponent },
  { path: 'stock-manager', component: StockManagerComponent },
  { path: 'closing-stock', component: ClosingStockComponent },
  { path: 'addon-stock', component: AddonStockComponent },
  { path: 'consolidated-orders', component: ConsolidatedOrdersComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'stockit', component: StockItComponent },
  { path: 'set-selling-price1', component: SetSellingPriceComponent },
  { path: 'stock-report', component: StockReportComponent },
  { path: 'sudden-order', component: SuddenOrderComponent },
  { path: 'cart-report', component: CartReportComponent },
  { path: 'customer-order', component: CustomerOrdersComponent },
  { path: 'acknowledge-orders', component: AcknowledgeOrdersComponent },
  { path: 'edit-orders', component: EditOrdersComponent },
  { path: 'stock-update', component: StockUpdateComponent },
  { path: 'add-on-stock', component: AddOnStockComponent },
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'otp-verify', component: VerifyOtpComponent },
  { path: 'set-password', component: SetPasswordComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'cart-on', component: CartOnComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
