import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../../models/Pedido.model';
import { PedidoService } from '../../../services/pedido.service';
import { ClienteService } from '../../../services/cliente.service';
import { Cliente } from '../../../models/Cliente.model';

@Component({
  selector: 'app-pedido-read',
  templateUrl: './pedido-read.component.html',
  styleUrls: ['./pedido-read.component.css']
})
export class PedidoReadComponent implements OnInit {

  pedidos : Pedido[];
  clientes : Cliente[];
  clienteFilter : string = null;
  statusEntregaFilter : string = null;

  constructor(
    private pedidoService : PedidoService,
    private clienteService : ClienteService
  ) { }

  ngOnInit(): void {
    this.carregarClientes();
  }

  buscarPedidos(): void {
    if(!!this.clienteFilter) {
      this.pedidoService.readByClienteId(this.clienteFilter).subscribe(
        pedidos => this.carregarPedidos(pedidos)
      );
    } else {
      this.pedidoService.read(this.statusEntregaFilter).subscribe(
        pedidos => this.carregarPedidos(pedidos)
      );
    }
  }

  private carregarClientes() : void {
    this.clienteService.read().subscribe(clientes => {
      this.clientes = clientes.map(cliente => {
        return { id: cliente.id, nome: cliente.nome }
      });
    });
  }

  private carregarPedidos(pedidos : Pedido[]) : void {
    this.pedidos = pedidos.map(pedido => {
      this.clienteService.readById(pedido.idCliente).subscribe(cliente => {
        pedido.cliente = cliente;
      });

      pedido.dataCadastro = pedido['data-cadastro'];
      pedido.statusEntrega = pedido['status-entrega'];
      delete pedido['data-cadastro'];
      delete pedido['status-entrega'];

      if(pedido.produtos.length > 0) {
        pedido.total = pedido.produtos.map(
          produto => produto.produto.valor * produto.quantidade
        ).reduce((accumulator, currentValue) => accumulator + currentValue);
      }

      return pedido;
    });
  }

}
