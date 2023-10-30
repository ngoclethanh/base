import {Pipe, PipeTransform} from '@angular/core';
import {Constants} from "@helper";
import FIXED_NUMBER = Constants.FIXED_NUMBER;

@Pipe({name: 'DecimalPipe', standalone: true})
export class NumNotRoundPipe implements PipeTransform {
  transform(value = 0, decimalNumber: string = FIXED_NUMBER.usd): string {
    const currencyValue = value > 1 ? new Intl.NumberFormat('en-EN', {
      maximumFractionDigits: 20
    }).format(value) : value;
    const conditionSlice = Number(decimalNumber.split('-')[1]);
    let [int, tail] = String(currencyValue).split('.');
    if (!conditionSlice) {
      return String(int);
    }
    if(!tail) tail = ''
    if(tail.length>conditionSlice){
      tail = tail.slice(0, conditionSlice)
    }
    tail = tail.padEnd(conditionSlice, "0")
    return `${int}.${tail}`;
  }
}
