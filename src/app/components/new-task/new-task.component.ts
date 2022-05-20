import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { ITask } from '../../interfaces/ITask';
import { Status } from '../../interfaces/Status';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.sass']
})
export class NewTaskComponent implements OnInit {
  constructor(private _taskSercive: TasksService ) {
  }

  ngOnInit(): void {
  }

  public task: ITask = {
    name: null,
    status: Status.toDo,
    id: null,
  }

  private get _taskId() {
    return Date.now() * Math.random();
  }

  public handleAddTask() {
    this.task.id = this._taskId;

    this._taskSercive.addTask (
      {
        name: this.task.name,
        status: this.task.status,
        id: this._taskId,
      }
    );

    this.task.name = null;
    this.task.status = Status.toDo;
  }

  get isDisabledButton() {
    return !this.task.name || !this.task.name.trim()
  }
}
