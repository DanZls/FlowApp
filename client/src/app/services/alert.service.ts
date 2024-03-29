import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  reloadModelListTrigger: Subject<any> = new Subject<any>();
}
