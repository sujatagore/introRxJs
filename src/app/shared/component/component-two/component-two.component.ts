import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.scss']
})
export class ComponentTwoComponent implements OnInit {

  taskNameValue !: string

  constructor(
    private _taskService : TaskService
  ) { }

  ngOnInit(): void {
    this._taskService.taskSub$
        .subscribe(val => this.taskNameValue = val)
  }

}
