import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { ITask } from '../../interfaces/ITask';
import { Status } from '../../interfaces/Status';
import { StatusColor } from '../../interfaces/StatusColor';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent implements OnInit {
  @Input() task: ITask;
  public readonly Status = Status;

  constructor(private _tasksService: TasksService) { }

  ngOnInit(): void {
  }

  public handleChangeStatus(status: string) {
    this._tasksService.changeStatus( {name: this.task.name, id: this.task.id, status: status} );
  }

  public handleRemoveTask() {
    this._tasksService.removeTask(this.task.id);
  }

}