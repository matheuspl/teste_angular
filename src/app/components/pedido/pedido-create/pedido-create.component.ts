import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Pedido } from '../../../models/Pedido.model';
import { PedidoService } from '../../../services/pedido.service';
import { MessageHandlerService } from '../../../services/message-handler.service';
import { Cliente } from '../../../models/Cliente.model';
import { Produto } from '../../../models/Produto.model';
import { ProdutoService } from '../../../services/produto.service';
import { ClienteService } from '../../../services/cliente.service';
import { AddProdutoDialogComponent } from './dialog/add-produto-dialog/add-produto-dialog.component';

@Component({
  selector: 'app-pedido-create',
  templateUrl: './pedido-create.component.html',
  styleUrls: ['./pedido-create.component.css']
})
export class PedidoCreateComponent implements OnInit {

  pedido: Pedido = {
    idCliente : '',
    statusEntrega : '',
    total : 0,
    produtos : []
  };

  clientes: Cliente[] = [];
  produtos: Produto[] = [];
  produtosSelect: {}[] = [];

  constructor(
    private pedidoService : PedidoService,
    private router : Router,
    private messageHandlerService: MessageHandlerService,
    private produtoService : ProdutoService,
    private clienteService : ClienteService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.carregarClientes();
    this.carregarProdutos();
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

  openDialog() : void {
    const dialogRef = this.dialog.open(AddProdutoDialogComponent, {
     width: '600px',
     data: { produtos : this.produtosSelect }
   });

   dialogRef.afterClosed().subscribe(result => {
     if(!!result){
       let filterProdutoSelecionado = this.produtos.filter(produto => result.produto == produto.id);

       if(filterProdutoSelecionado.length > 0) {
          let produtoSelecionado = filterProdutoSelecionado[0];
          let produtoPedido = {
            produto: produtoSelecionado,
            quantidade: result.quantidade
          }
          this.pedido.produtos.push(produtoPedido);
       }
     }
   });
  }

  private carregarClientes() : void {
    this.clienteService.read().subscribe(clientes => {
      this.clientes = clientes.map(cliente => {
        return { id: cliente.id, nome: cliente.nome }
      });
    });
  }

  private carregarProdutos() : void {
    this.produtoService.read().subscribe(produtos => {
      this.produtos = produtos;
      this.produtosSelect = produtos.map(produto => {
        return { id: produto.id, nome: produto.nome }
      });
    });
  }
}
