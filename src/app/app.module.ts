import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Cat01Component } from './page/cat01/cat01.component';
import { Cat02Component } from './page/cat02/cat02.component';
import { HomeComponent } from './page/home/home.component';
import { ProductListComponent } from './common/product-list/product-list.component';
import { ProductCardComponent } from './common/product-card/product-card.component';

import { FilterPipe } from './pipe/filter.pipe';
import { FeaturePipe } from './pipe/feature.pipe';
import { Kat1Pipe } from './pipe/kat1.pipe';
import { Kat2Pipe } from './pipe/kat2.pipe';
import { LapozoComponent } from './common/lapozo/lapozo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Cat01Component,
    Cat02Component,
    HomeComponent,
    ProductListComponent,
    ProductCardComponent,
    
    FilterPipe,
    FeaturePipe,
    Kat1Pipe,
    Kat2Pipe,
    LapozoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
