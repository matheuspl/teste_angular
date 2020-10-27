import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../../services/cliente.service';
import { Cliente } from '../../../models/Cliente.model';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit {

  clientes : Cliente[];
  displayedColumns : string[] = ['id', 'nome', 'dataCadastro', 'status', 'action'];

  constructor(private clienteService : ClienteService) { }

  ngOnInit(): void {
    this.clienteService.read().subscribe(clientes => {
      this.clientes = clientes.map(cliente => {
        cliente.dataCadastro = cliente["data-cadastro"];
        delete cliente["data-cadastro"];
        return cliente;
      });
    });
  }

}
