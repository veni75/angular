import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kat2'
})
export class Kat2Pipe implements PipeTransform {

  transform(value: any[]): any[] {
    if(!Array.isArray(value) ){
      return value;
    }
    
    return value.filter((item)=>item.catId=2);
  
  }

}
