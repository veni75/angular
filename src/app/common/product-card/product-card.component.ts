import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/modul/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})

export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  @Input() products: Product[];
  productList: Product[] = this.productService.list;

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

}
