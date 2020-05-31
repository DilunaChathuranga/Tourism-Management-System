import { BookingService } from './booking.service';
import { EqCateServiceService } from './eq-cate-service.service';
import { ServiceServiceService } from './service-service.service';
import { PackagecategoryServiceService } from './packagecategory-service.service';
import { OfferCategoryService } from './offer-category.service';

//import { Product } from './models/products';
//import { ProductService } from './product.service';

import { AdminAuthGuard } from './admin-auth-guard.service';
import { UserService } from './user.service';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { SubnavComponent } from './subnav/subnav.component';

import { EmployeeCategoriesService } from './employee-categories.service';
import { CategoryService } from './category.service';

import { LoginComponent } from './login/login.component';
import { VerticalSidebarComponent } from './vertical-sidebar/vertical-sidebar.component';
import { SigninComponent } from './signin/signin.component';

import { PackageService } from './package.service';
import { PackageMgComponent } from './package-mg/package-mg.component';
import { PackageFormComponent } from './package-form/package-form.component';
import { PackageManageComponent } from './package-manage/package-manage.component';

import { EmployeeService } from './employee.service';
import { ProfilesComponent } from './profiles/profiles.component';
import { AdminEmployeeComponent } from './admin-employee/admin-employee.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { PackagesubnavComponent } from './packagesubnav/packagesubnav.component';

import { EquipmentService } from './equipment.service';
import { EquipmentComponent } from './equipment/equipment.component';
import { ManageEquipmentComponent } from './manage-equipment/manage-equipment.component';
import { EquipmentFormComponent } from './equipment-form/equipment-form.component';
import { EquipmentFilterComponent } from './equipment/equipment-filter/equipment-filter.component';
import { EquipmentCardComponent } from './equipment-card/equipment-card.component';
import { EquSubnavComponent } from './equ-subnav/equ-subnav.component';
import { ProfSubnavComponent } from './prof-subnav/prof-subnav.component';

import { ServiceComponent } from './service/service.component';
import { ServiceManageComponent } from './service-manage/service-manage.component';
import { ServiceFormComponent } from './service-form/service-form.component';
import { ServiceNavbarComponent } from './service-navbar/service-navbar.component';

import {SlideshowModule} from 'ng-simple-slideshow';
import { BooknowComponent } from './booknow/booknow.component';

import { CustomerOffersComponent } from './customer-offers/customer-offers.component';
import { AdminPackageComponent } from './admin-package/admin-package.component';

import { PriceService } from './price.service';
import { PaymentPackageService } from './payment-package.service';



@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    //AdminProductsComponent,
    LoginComponent,
    //ProductFormComponent,
    VerticalSidebarComponent,
    SigninComponent,
    PackageMgComponent,
    PackageFormComponent,
    PackageManageComponent,
    ProfilesComponent,
    AdminEmployeeComponent,
    EmployeeFormComponent,
    SubnavComponent,
    PackagesubnavComponent,
    EquipmentComponent,
    ManageEquipmentComponent,
    EquipmentFormComponent,
    EquipmentFilterComponent,
    EquipmentCardComponent,
    EquSubnavComponent,
    ProfSubnavComponent,
    ServiceComponent,
    ServiceManageComponent,
    ServiceFormComponent,
    ServiceNavbarComponent,
    BooknowComponent,
    BooknowComponent,
    CustomerOffersComponent,
    AdminPackageComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    SlideshowModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
     // { path: 'dashboard',component: DashboardComponent, canActivate: [AuthGuard]},

      { path: 'package' ,component: PackageMgComponent, canActivate: [AuthGuard]},
      { path: 'package/manage' ,component: PackageManageComponent, canActivate: [AuthGuard , AdminAuthGuard]},
      { path: 'package/manage/form' ,component: PackageFormComponent, canActivate: [AuthGuard , AdminAuthGuard]},
      { path: 'package/manage/form/:id' ,component: PackageFormComponent, canActivate: [AuthGuard , AdminAuthGuard]},

      { path: 'profiles' ,component: ProfilesComponent, canActivate: [AuthGuard]},
      { path: 'profiles/manage' ,component: AdminEmployeeComponent, canActivate: [AuthGuard, AdminAuthGuard]},
      { path: 'profiles/manage/form' ,component: EmployeeFormComponent, canActivate: [AuthGuard, AdminAuthGuard]},
      { path: 'profiles/manage/form/:id' ,component: EmployeeFormComponent, canActivate: [AuthGuard , AdminAuthGuard]},

      {path: 'equipment', component: EquipmentComponent, canActivate:[AuthGuard]},
      {path: 'equipment/manage', component: ManageEquipmentComponent, canActivate:[AuthGuard, AdminAuthGuard]},
      {path: 'equipment/manage/form', component: EquipmentFormComponent, canActivate:[AuthGuard, AdminAuthGuard]},
      {path: 'equipment/manage/:id', component: EquipmentFormComponent, canActivate:[AuthGuard, AdminAuthGuard]},

      { path: 'service' ,component: ServiceComponent, canActivate: [AuthGuard]},
      { path: 'service/manage' ,component: ServiceManageComponent, canActivate: [AuthGuard , AdminAuthGuard]},
      { path: 'service/manage/form' ,component: ServiceFormComponent, canActivate: [AuthGuard , AdminAuthGuard]},
      { path: 'service/manage/form/:id' ,component: ServiceFormComponent, canActivate: [AuthGuard , AdminAuthGuard]},

      { path: 'payment' ,component: CustomerOffersComponent, canActivate: [AuthGuard , AdminAuthGuard]},
      { path: 'payment/manage' ,component: AdminPackageComponent, canActivate: [AuthGuard , AdminAuthGuard]},

      { path: 'booking' ,component: BooknowComponent, canActivate: [AuthGuard , AdminAuthGuard]}
      
      
      /*{ path: 'admin/products/new',component: ProductFormComponent, canActivate: [AuthGuard, AdminAuthGuard]},
      { path: 'admin/products/:id',component: ProductFormComponent, canActivate: [AuthGuard, AdminAuthGuard]},
      { path: 'admin/products',component: AdminProductsComponent, canActivate: [AuthGuard, AdminAuthGuard]},*/


    ])
  ],
  providers: [
    AuthService,
    AuthGuard,
    AdminAuthGuard,
    UserService,
    CategoryService,
    //ProductService,
    PackageService,
    EmployeeService,
    EmployeeCategoriesService,
    EquipmentService,
    OfferCategoryService,
    PackagecategoryServiceService,
    ServiceServiceService,
    EqCateServiceService,
    BookingService,
    PriceService,
    PaymentPackageService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
