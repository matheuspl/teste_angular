import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ClienteComponent } from './views/cliente/cliente.component';
import { ProdutoComponent } from './views/produto/produto.component';
import { PedidoComponent } from './views/pedido/pedido.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';

const routes: Routes = [
  { path : '', component: HomeComponent },
  { path : 'produtos', component: ProdutoComponent },
  { path : 'clientes', component: ClienteComponent },
  { path : 'clientes/create', component: ClienteCreateComponent },
  { path : 'pedidos', component: PedidoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
