import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { KegListComponent } from './keg-list/keg-list.component';
import { AddKegComponent } from './add-keg/add-keg.component';
import { EditKegComponent } from './edit-keg/edit-keg.component';
import { KegSaleComponent } from './keg-sale/keg-sale.component';
import { KegSaleListComponent } from './keg-sale-list/keg-sale-list.component';
import { IsOnSalePipe } from './isOnSale.pipe';


@NgModule({
  declarations: [
    AppComponent,
    KegListComponent,
    AddKegComponent,
    EditKegComponent,
    KegSaleComponent,
    KegSaleListComponent,
    IsOnSalePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
