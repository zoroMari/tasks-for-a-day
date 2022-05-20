import { Component, OnInit } from '@angular/core';
import { ITask } from './interfaces/ITask';
import { Status } from './interfaces/Status';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  filteredTasks: ITask[];

  constructor(private _tasksService: TasksService) {
  }

  public ngOnInit(): void {
    this._tasksService.openTasks();

    this.filteredTasks = this._tasksService.filteredTasks;

    this._tasksService.statusChanged
      .subscribe(
        (status: Status) => {
          this.filteredTasks = this._tasksService.filterTasks(status);
        }
      )

    this._tasksService.tasksChanged
      .subscribe(
        (tasks: ITask[]) => {
          this.filteredTasks = tasks;
        }
      )
  }

  handleClearTasks() {
    this._tasksService.clearTasks();
  }
}
