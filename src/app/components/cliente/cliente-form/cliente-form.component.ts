import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../../models/Cliente.model';
import { ClienteService } from '../../../services/cliente.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  cliente : Cliente = {
    nome: '',
    status: null
  };

  constructor(
    private clienteService : ClienteService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  salvar() : void {
    this.clienteService.salvar(this.cliente);
  }

  cancel() : void {
    this.router.navigate(['/clientes'])
  }

}
