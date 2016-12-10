import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'property'
})
export class PropertyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
