import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss']
})
export class ComponentOneComponent implements OnInit {

  taskNameValue !: string
  
  constructor(
    private _taskService : TaskService
  ) { }

  ngOnInit(): void {
    // here we want to get data from subject.
    // so we have to use subject as a observable.
    // by subscribing that subject we can get data.

      this._taskService.taskSub$
        .subscribe(val => this.taskNameValue = val)
  }

}
