import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSizePipe'
})
export class FileSizePipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
