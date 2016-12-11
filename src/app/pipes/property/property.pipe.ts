import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'property'
})
export class PropertyPipe implements PipeTransform {
  transform(value: any) {
    return value.filter((profile: any) => profile.status === 'Invited');
  }
}
