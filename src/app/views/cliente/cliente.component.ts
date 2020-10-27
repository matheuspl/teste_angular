import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../components/template/header/header.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(
    private headerService: HeaderService,
    private router: Router
  ) {
    headerService.headerData = {
      title : 'Clientes',
      icon : 'contacts',
      routeUrl : '/clientes'
    }
  }

  ngOnInit(): void {
  }

  navigateToClienteCreate() : void {
    this.router.navigate(['/clientes/create']);
  }

}
