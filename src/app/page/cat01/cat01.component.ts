import { Component, OnInit } from '@angular/core';
import { Product } from '../../modul/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-cat01',
  templateUrl: './cat01.component.html',
  styleUrls: ['./cat01.component.scss']
})
export class Cat01Component implements OnInit {
  product: Product = new Product();
  productList: Product[] = this.productService.list;
  kiemelt: boolean = true;

  kiemeltList: Product[] = this.productList.filter(item => item);
  kategoria1List: boolean=true;

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

}
