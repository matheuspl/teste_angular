import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ClienteComponent } from './views/cliente/cliente.component';
import { ProdutoComponent } from './views/produto/produto.component';
import { PedidoComponent } from './views/pedido/pedido.component';

const routes: Routes = [
  { path : '', component: HomeComponent },
  { path : 'clientes', component: ClienteComponent },
  { path : 'produtos', component: ProdutoComponent },
  { path : 'pedidos', component: PedidoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
