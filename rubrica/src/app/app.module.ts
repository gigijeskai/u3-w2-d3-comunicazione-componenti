import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RubricaPage } from './rubrica/rubrica.page';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TabellaComponent } from './rubrica/tabella/tabella.component';
import { InputComponent } from './rubrica/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    RubricaPage,
    HeaderComponent,
    FooterComponent,
    TabellaComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
