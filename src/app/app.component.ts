import { Component } from '@angular/core';
import { ITask } from './interfaces/ITask';
import { Status } from './interfaces/Status';
import { TasksService } from './services/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  tasks: ITask[];
  filteredTasks: ITask[] = [{name: '1', status: 'TO DO', id: 682347124775.523}];

  constructor(private _tasksService: TasksService) {
  }

  public ngOnInit(): void {
    this.tasks = this._tasksService.tasks;
    // this.filteredTasks = this._tasksService.filteredTasks;
    this._tasksService.openTasks();

    console.log('this.tasks >>>', this.tasks);
    console.log('this._tasksService.tasks >>>', this._tasksService.tasks);
    console.log('this.filteredTasks >>>', this.filteredTasks);
    console.log('this._tasksService.filteredTasks >>>', this._tasksService.filteredTasks);
  }

  handleClearTasks() {
    this._tasksService.handleClearTasks();
  }
}
