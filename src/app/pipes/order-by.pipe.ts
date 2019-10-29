import { Pipe, PipeTransform, Input } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: Array<any>, selected: string): any {

    return value.sort(function (a, b) {
      if((typeof a[selected]) == "string"){
        return (a[selected] as string).localeCompare(b[selected]);
      }
      return a[selected] - b[selected];
    })
  }
  
}
