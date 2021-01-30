import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from 'src/app/common/product-list/product-list.component';
import { LapozoComponent } from 'src/app/common/lapozo/lapozo.component';
import { Product } from '../../modul/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  product: Product = new Product();
  productList: Product[] = this.productService.list;

  kiemeltList: Product[] = this.productList.filter(product => product.featured)
    .sort(() => 0.5 - Math.random())
    .slice(0, 5);

  kiemelt: boolean = true;
  akcios: boolean = true;

  akciosList: Product[] = this.productList.filter(item => item.active);

  constructor(
    private productService: ProductService,

  ) { }

  ngOnInit(): void {
  }

}
