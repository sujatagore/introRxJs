import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-component-three',
  templateUrl: './component-three.component.html',
  styleUrls: ['./component-three.component.scss']
})
export class ComponentThreeComponent implements OnInit {

  taskNameValue !: string
  
  constructor(
    private _taskService : TaskService
  ) { }

  ngOnInit(): void {
    this._taskService.taskSub$
        .subscribe(val => this.taskNameValue = val)
  }
}
