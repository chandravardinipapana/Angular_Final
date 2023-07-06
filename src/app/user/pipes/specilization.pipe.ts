import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'specilization'
})
export class SpecilizationPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
