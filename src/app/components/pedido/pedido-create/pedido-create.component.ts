import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from '../../../models/Pedido.model';
import { PedidoService } from '../../../services/pedido.service';
import { MessageHandlerService } from '../../../services/message-handler.service';
import { Cliente } from '../../../models/Cliente.model';
import { Produto } from '../../../models/Produto.model';
import { ProdutoService } from '../../../services/produto.service';
import { ClienteService } from '../../../services/cliente.service';

@Component({
  selector: 'app-pedido-create',
  templateUrl: './pedido-create.component.html',
  styleUrls: ['./pedido-create.component.css']
})
export class PedidoCreateComponent implements OnInit {

  pedido: Pedido;
  clientes: Cliente[] = [];
  produtos: Produto[] = [];

  constructor(
    private pedidoService : PedidoService,
    private router : Router,
    private messageHandlerService: MessageHandlerService,
    private produtoService : ProdutoService,
    private clienteService : ClienteService
  ) { }

  ngOnInit(): void {
    this.clienteService.read().subscribe(clientes => {
      this.clientes = clientes.map(cliente => {
        return { id : cliente.id, nome: cliente.nome }
      });
    });
  }

  salvar() : void {
    this.pedidoService.create(this.pedido).subscribe(() => {
      this.messageHandlerService.showMessage('Pedido Salvo com Sucesso!');
      this.router.navigate(['/pedidos']);
    });
  }

  cancel() : void {
    this.router.navigate(['/pedidos']);
  }

}
