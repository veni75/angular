import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kat1'
})
export class Kat1Pipe implements PipeTransform {

  
  transform(value: any[]): any[] {
    if(!Array.isArray(value) ){
      return value;
    }
    const kat1List: any[] =value.filter((item)=>item.catId==1);
    return kat1List;
  
  }

}
