import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { KegListComponent } from './keg-list/keg-list.component';
import { KegSaleComponent } from './keg-sale/keg-sale.component';
import { KegSaleListComponent } from './keg-sale-list/keg-sale-list.component';
import { IsOnSalePipe } from './isOnSale.pipe';
import { KegLowListComponent } from './keg-low-list/keg-low-list.component';


@NgModule({
  declarations: [
    AppComponent,
    KegListComponent,
    KegSaleComponent,
    KegSaleListComponent,
    IsOnSalePipe,
    KegLowListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
