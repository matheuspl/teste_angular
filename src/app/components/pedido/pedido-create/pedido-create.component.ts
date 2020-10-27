import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from '../../../models/Pedido.model';
import { PedidoService } from '../../../services/pedido.service';
import { MessageHandlerService } from '../../../services/message-handler.service';

@Component({
  selector: 'app-pedido-create',
  templateUrl: './pedido-create.component.html',
  styleUrls: ['./pedido-create.component.css']
})
export class PedidoCreateComponent implements OnInit {

  pedido : Pedido;

  constructor(
    private pedidoService : PedidoService,
    private router : Router,
    private messageHandlerService: MessageHandlerService
  ) { }

  ngOnInit(): void {
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
