import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'stringToArray',
    pure: false
  })
export class StringToArrayPipe implements PipeTransform {

    transform(stringData: String): any {
        const arr = stringData.split('')
    
        return arr
      }
}