import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BootstrapImportModule } from './bootstrap-import/bootstrap-import.module';
import { WidgetComponent } from './components/widget/widget.component';
import { PlainWidgetComponent } from './components/plain-widget/plain-widget.component';
import { ProductComponent } from './components/product/product.component';
import { ProductVariationComponent } from './components/product-variation/product-variation.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WidgetComponent,
    PlainWidgetComponent,
    ProductComponent,
    ProductVariationComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
    NgbModule,
    BootstrapImportModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
