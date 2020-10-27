import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ClienteComponent } from './views/cliente/cliente.component';
import { ProdutoComponent } from './views/produto/produto.component';
import { PedidoComponent } from './views/pedido/pedido.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { PedidoCreateComponent } from './components/pedido/pedido-create/pedido-create.component';

const routes: Routes = [
  { path : '', component: HomeComponent },
  { path : 'produtos', component: ProdutoComponent },
  { path : 'clientes', component: ClienteComponent },
  { path : 'clientes/create', component: ClienteCreateComponent },
  { path : 'clientes/update/:id', component: ClienteUpdateComponent },
  { path : 'pedidos', component: PedidoComponent },
  { path : 'pedidos/create', component: PedidoCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
