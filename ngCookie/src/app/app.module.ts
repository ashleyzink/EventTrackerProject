import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieListComponent } from './components/cookie-list/cookie-list.component';
import { FormsModule } from '@angular/forms';
import { CookieService } from './services/cookie.service';
import { CookieTexturePipe } from './pipes/cookie-texture.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CookieListComponent,
    CookieTexturePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
