import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../components/template/header/header.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title : 'Clientes',
      icon : 'contacts',
      routeUrl : '/clientes'
    }
  }

  ngOnInit(): void {
  }

}
