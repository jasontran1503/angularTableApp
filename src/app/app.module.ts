import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { PhonePipe } from './pipes/phone.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { SelectBoxComponent } from './select-box/select-box.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PhonePipe,
    OrderByPipe,
    SelectBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
