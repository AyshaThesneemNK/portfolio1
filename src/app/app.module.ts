import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { ScrollAnimationDirective } from './scroll-animation.directive';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    ScrollAnimationDirective
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
