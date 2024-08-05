import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // taskSub$ : Subject<string> = new Subject<string>();
  taskSub$ : BehaviorSubject<string> = new BehaviorSubject<string>('RxJs');
  //BehaviorSubject has default value
  constructor() { }


}
