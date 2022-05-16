import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from '../interfaces/ITask';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.sass']
})
export class TaskComponent implements OnInit {
  @Input() task: ITask;
  @Input() id: number;
  @Output() onChangeStatus = new EventEmitter<{id: number, newStatus: string}>();
  @Output() onDeleteTask = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  handleChangeStatus(status: string) {
    this.onChangeStatus.emit( {id: this.id, newStatus: status} );
  }

  handleRemoveTask() {
    this.onDeleteTask.emit(this.id);
  }

  statusColor() {
    switch(this.task.status) {
      case 'TO DO':
        return 'blue';
      case 'IN WORK':
        return 'orange';
      case 'DONE':
        return 'green';
    }
  }

}
