import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from '../../../models/Cliente.model';
import { ClienteService } from '../../../services/cliente.service';
import { MessageHandlerService } from '../../../services/message-handler.service';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {

  cliente : Cliente;

  constructor(
    private clienteService : ClienteService,
    private router : Router,
    private route : ActivatedRoute,
    private messageHandlerService: MessageHandlerService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.clienteService.readById(id).subscribe(cliente => {
      this.cliente = cliente;
      this.clienteService.carregarCliente(cliente);
    });

    this.clienteService.pendente$.subscribe(cliente => {
      this.cliente = JSON.parse(cliente);
      this.salvar();
    });
  }

  salvar() : void {
    this.clienteService.update(this.cliente).subscribe(() => {
      this.messageHandlerService.showMessage('Cliente Salvo com Sucesso!');
      this.router.navigate(['/clientes']);
    });
  }

}
