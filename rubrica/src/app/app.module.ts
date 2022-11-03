import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RubricaPage } from './rubrica/rubrica.page';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddContactComponent } from './rubrica/add-contact/add-contact.component';
import { TableContactComponent } from './rubrica/table-contact/table-contact.component';
import { DetailContactComponent } from './rubrica/detail-contact/detail-contact.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RubricaPage,
    HeaderComponent,
    FooterComponent,
    AddContactComponent,
    TableContactComponent,
    DetailContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
