import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateUtilService {

  

  constructor() { }

  getTodayMinDate(): string {
    const today = new Date();
    today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
    return today.toISOString().split('T')[0];
  }
  generateHoraList(): string[] {
    return Array.from({length: 24}, (_, i) => {
      return `${i.toString().padStart(2, '0')}:00`;
    }).concat(['23:59']);
  }
  
}
