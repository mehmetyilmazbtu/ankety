import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnketSayfasiComponent } from './anket-sayfasi/anket-sayfasi.component';
import { AnketGonderComponent } from './anket-gonder/anket-gonder.component';
import { AnketSonuclariComponent } from './anket-sonuclari/anket-sonuclari.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AnketDetayComponent } from './anket-detay/anket-detay.component';

@NgModule({
  declarations: [
    AppComponent,
    AnketSayfasiComponent,
    AnketGonderComponent,
    AnketSonuclariComponent,
    AnketDetayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
