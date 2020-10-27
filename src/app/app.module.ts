import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './views/home/home.component';
import { ProdutoComponent } from './views/produto/produto.component';
import { ClienteComponent } from './views/cliente/cliente.component';
import { PedidoComponent } from './views/pedido/pedido.component';
import { ProdutoReadComponent } from './components/produto/produto-read/produto-read.component';

import localePT from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";
registerLocaleData(localePT);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProdutoComponent,
    ClienteComponent,
    PedidoComponent,
    ProdutoReadComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule,
    MatTableModule,
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
