import { Component, OnInit } from '@angular/core';
import { Product } from '../../modul/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-cat02',
  templateUrl: './cat02.component.html',
  styleUrls: ['./cat02.component.scss']
})
export class Cat02Component implements OnInit {
  product: Product = new Product();
  productList: Product[] = this.productService.list;
  
  kiemeltList: Product[] = this.productList.filter(item=>item);
  kategoria2List: Product[] = this.productList.filter(item => item.catId === 2);
  kiemelt: boolean = true;

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

}






  

  

  

  