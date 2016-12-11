import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keyFilter'
})
export class KeyFilterPipe implements PipeTransform {

  transform(value: any, keyCode: any): any {
      return value === keyCode;
  }
}
