import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Status } from 'src/app/interfaces/Status';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.sass']
})
export class TabsComponent implements OnInit {
  public readonly Status = Status;

  constructor(private _tasksService: TasksService) { }

  ngOnInit(): void {
  }

  public handleChangeStatus(status: Status) {
    this._tasksService.statusChanged.emit(status);
  }
}
