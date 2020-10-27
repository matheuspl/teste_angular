import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../components/template/header/header.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  constructor(private headerService : HeaderService) {
    headerService.headerData = {
      title : 'Produtos',
      icon : 'storefront',
      routeUrl : '/produtos'
    }
  }

  ngOnInit(): void {
  }

}
