import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'encodePipe',
})
export class EncodePipePipe implements PipeTransform {
  transform(value: string, id: number): string {
    return `/Blog/${id}/${encodeURIComponent(
      value.replaceAll(' ', '-').toLowerCase()
    )}`;
  }
}
