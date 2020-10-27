import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../components/template/header/header.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title : 'Pedidos',
      icon : 'dashboard',
      routeUrl : '/pedidos'
    }
  }

  ngOnInit(): void {
  }

}
