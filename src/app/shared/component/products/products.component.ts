import { Component, OnInit } from '@angular/core';
import { OfService } from '../../services/of.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    private _ofServices : OfService
  ) { }

  ngOnInit(): void {
    this._ofServices.of$
      .subscribe(num =>{
        console.log(num);
      })
  }

}
