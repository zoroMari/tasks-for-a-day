import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() onChangeStatus = new EventEmitter<ITask>();
  @Output() onDeleteTask = new EventEmitter<number>();
  public readonly Status = Status;

  constructor() { }

  ngOnInit(): void {
  }

  handleChangeStatus(status: string) {
    this.onChangeStatus.emit( {name: this.task.name, id: this.task.id, status: status} );
  }

  handleRemoveTask() {
    this.onDeleteTask.emit(this.task.id);
  }

}
