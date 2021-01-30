import { Injectable } from '@angular/core';
import { Product } from '../modul/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  list: Product[] = [
    {
      id: 1,
      name: 'Tades CasterotKA1',
      description: 'gfdfg',
      price: 10,
      stock:  10,
      catId: 1,
      image: '',
      featured: true,
      active: true,
    },
    {
      id: 2,
      name: 'Carmela Sandland1',
      active: false,
      description: 'gfdfg',
      price: 9,
      stock: 10,
      catId: 1,
      image: '',
      featured: false,         
    }, {
      id: 3,
      name: 'Annnora BeebisK2',
      active: false,
      description: 'gfdfg',
      price: 8,
      stock:  10,
      catId: 2,
      image: '',
      featured: true,         
    },{
      id: 4,
      name: 'BeebisKA2',
      active: true,
      description: 'gfdfg',
      price: 7,
      stock:  10,
      catId: 2,
      image: '',
      featured: true,         
    },{
      id: 5,
      name: 'HJ Beebis1',
      active: false,
      description: 'gfdfg',
      price: 5,
      stock:  10,
      catId: 1,
      image: '',
      featured: false,         
    },{
      id: 6,
      name: 'Annnora BeebisK1',
      active: false,
      description: 'gfdfg',
      price: 4,
      stock:  10,
      catId: 1,
      image: '',
      featured: true,         
    },{
      id: 7,
      name: 'Annnora BeebisA2',
      active: true,
      description: 'gfdfg',
      price: 5,
      stock:  10,
      catId: 2,
      image: '',
      featured: false,         
    },{
      id:8,
      name: 'Annnora Beebis2',
      active: false,
      description: 'gfdfg',
      price: 10,
      stock:  10,
      catId: 2,
      image: '',
      featured: false,         
    },{
      id: 9,
      name: 'Annnora BeebisK1',
      active: false,
      description: 'gfdfg',
      price: 7,
      stock:  10,
      catId: 1,
      image: '',
      featured: true,         
    },{
      id: 10,
      name: 'Annnora Beebis1',
      active: false,
      description: 'gfdfg',
      price: 10,
      stock:  10,
      catId: 1,
      image: '',
      featured: false,         
    },{
      id: 11,
      name: 'Annnora BeebisK2',
      active: false,
      description: 'gfdfg',
      price: 10,
      stock:  10,
      catId: 2,
      image: '',
      featured: true,         
    }];

  constructor() { }

  removeProduct(product: Product): void {
    const index = this.list.findIndex(item => item.id === product.id);
    this.list.splice(index, 1);
  }
}
