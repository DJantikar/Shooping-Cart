import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ShoppingService } from 'app/shopping.service';
import { TotalComponent } from './total/total.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    TotalComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
