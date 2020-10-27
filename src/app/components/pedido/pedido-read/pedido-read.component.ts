import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../../models/Pedido.model';
import { PedidoService } from '../../../services/pedido.service';
import { ClienteService } from '../../../services/cliente.service';

@Component({
  selector: 'app-pedido-read',
  templateUrl: './pedido-read.component.html',
  styleUrls: ['./pedido-read.component.css']
})
export class PedidoReadComponent implements OnInit {

  pedidos : Pedido[];

  constructor(
    private pedidoService : PedidoService,
    private clienteService : ClienteService
  ) { }

  ngOnInit(): void {
    this.pedidoService.read().subscribe(pedidos => {
      this.pedidos = pedidos.map(pedido => {
        this.clienteService.readById(pedido.idCliente).subscribe(cliente => {
          pedido.cliente = cliente;
        });
        pedido.dataCadastro = pedido['data-cadastro'];
        pedido.statusEntrega = pedido['status-entrega'];
        delete pedido['data-cadastro'];
        delete pedido['status-entrega'];
        pedido.total = pedido.produtos.map(
          produto => produto.produto.valor * produto.quantidade
        ).reduce(
          (accumulator, currentValue) => accumulator + currentValue
        );
        return pedido;
      });
    });
  }

}
