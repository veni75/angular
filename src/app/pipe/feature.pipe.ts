import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'feature'
})
export class FeaturePipe implements PipeTransform {

   transform(value: any[]): any[] {
    if(!Array.isArray(value)){
      return value;
    }
    
    return value.filter(item=>item.featured);
  
  }

}
