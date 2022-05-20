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
  tasks: ITask[];
  filteredTasks: ITask[];

  constructor(private _tasksService: TasksService) {
  }

  public ngOnInit(): void {
    this._tasksService.openTasks();

    this.tasks = this._tasksService.tasks;
    this.filteredTasks = this._tasksService.filteredTasks;

    this._tasksService.statusChanged
      .subscribe(
        (status: Status) => {
          this.filteredTasks = this._tasksService.filterTasks(status);
        }
      )
  }

  handleClearTasks() {
    this._tasksService.clearTasks();

    this.tasks = this._tasksService.tasks;
    this.filteredTasks = this._tasksService.filteredTasks;
  }
}
