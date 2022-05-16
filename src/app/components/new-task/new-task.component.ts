import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ITask } from '../../interfaces/ITask';
import { Status } from '../../interfaces/Status';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.sass']
})
export class NewTaskComponent implements OnInit {
  public task: ITask = {
    name: null,
    status: Status.toDo,
  }

  @Output() onAddTask = new EventEmitter<ITask>();

  constructor() {
  }

  ngOnInit(): void {
  }

  handleAddTask() {
    this.onAddTask.emit(
      {
        name: this.task.name,
        status: this.task.status,
      }
    );

    this.task.name = null;
    this.task.status = Status.toDo;
  }
}