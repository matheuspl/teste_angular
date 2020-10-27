import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../components/template/header/header.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  constructor(
    private headerService: HeaderService,
    private router : Router
  ) {
    headerService.headerData = {
      title : 'Pedidos',
      icon : 'dashboard',
      routeUrl : '/pedidos'
    }
  }

  ngOnInit(): void {
  }

  navigateToPedidoCreate() : void {
    this.router.navigate(['/pedidos/create']);
  }

}
