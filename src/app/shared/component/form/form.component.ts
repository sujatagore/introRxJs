import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(
    private _taskService : TaskService
  ) { }

  ngOnInit(): void {
  }

  @ViewChild('taskName') taskNameRef !: ElementRef;

  onTaskAdd(){
    let val = this.taskNameRef.nativeElement.value as string;
    console.log(val);
    this.taskNameRef.nativeElement.value = ''

    // we want to send/emit data so we will use subject as a observer.
    this._taskService.taskSub$.next(val);
  }

}
