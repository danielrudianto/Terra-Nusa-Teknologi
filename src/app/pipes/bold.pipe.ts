import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bold',
})
export class BoldPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
  }
}
