import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/modul/product';
import { ProductService } from 'src/app/service/product.service';
import { ProductCardComponent } from 'src/app/common/product-card/product-card.component';


@Component({
  selector: 'app-lapozo',
  templateUrl: './lapozo.component.html',
  styleUrls: ['./lapozo.component.scss']
})
export class LapozoComponent implements OnInit {

  @Input() products: Product[] = [];
  @Input() product: Product;
  @Input() productK: Product;
  @Input() productA: Product;
  
    
  productList: Product[] = this.productService.list;
  //lapozoList: Product[] = this.productList.filter((item,key)=>key<5);  

  lapozoListK: Product[] = this.productList.filter( product => product.featured );
    //.sort( () => 0.5 - Math.random())
    //.slice(0, 4);
    

  lapozoListA: Product[] = this.productList.filter( product => product.active );
    //.sort( () => 0.5 - Math.random())
    //.slice(0, 4);

  constructor(
    private productService: ProductService,    
  ) { }

  ngOnInit(): void {
  }

}
