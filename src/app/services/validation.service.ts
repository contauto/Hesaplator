import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }



  getValidationMessage(f: AbstractControl, name: string) {

    if (f.errors) {
      for (let errorName in f.errors) {
        switch (errorName) {
          case "required":
            return name +" " + "alanı boş bırakılamaz"
          case "pattern":
            return "Bu alana sadece sayı girişi yapılabilir"
          default:
            break;
        }
      }
    }

  }

}
