import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/modul/product';
import { ProductService } from 'src/app/service/product.service';
import { ProductCardComponent } from 'src/app/common/product-card/product-card.component';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[] = [];
  @Input() kategoria1:Product[];
  @Input() kategoria2:Product[];
  @Input() phraseString: string = '';
  

  productList: Product[] = this.productService.list;
  // currentProduct: Product = new Product();

  columnKey: string = '';

  constructor(
    private productService: ProductService,    
  ) { }

  ngOnInit(): void {
  }

  /* onSelectProduct(product: Product): void {
    this.currentProduct = product;
  } */


  onColumnSelect(key: string): void {
    this.columnKey = key;
  }
}