import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../../../services/cliente.service';
import { Cliente } from '../../../models/Cliente.model';
import { MessageHandlerService } from '../../../services/message-handler.service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  cliente : Cliente;

  constructor(
    private clienteService : ClienteService,
    private router : Router,
    private messageHandlerService: MessageHandlerService
  ) { }

  ngOnInit(): void {
    this.clienteService.pendente$.subscribe(cliente => {
      this.cliente = JSON.parse(cliente);
      this.salvar();
    });
  }

  salvar() : void {
    this.clienteService.create(this.cliente).subscribe(() => {
      this.messageHandlerService.showMessage('Cliente Salvo com Sucesso!');
      this.router.navigate(['/clientes']);
    });
  }

}
