import { Component } from '@angular/core';
import { ITask } from './interfaces/ITask';
import { Status } from './interfaces/Status';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  tasks: ITask[] = [];
  public status: Status = Status.all;

  constructor() {
  }

  public ngOnInit(): void {
    this.openTasks();
  }

  public get filteredTasks(): ITask[] {
    if (this.status === Status.all) return this.tasks;
    return this.tasks.filter(({ status }) => status === this.status);
  }

  private openTasks() {
    localStorage.getItem('tasks')
      ? this.tasks = JSON.parse(localStorage.getItem('tasks'))
      : this.tasks = [];
  }

  handleAddTask(task: ITask) {
    this.tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  handleChangeStatus(updateTaskInfo: ITask) {
    this.tasks[this.taskIndexById(updateTaskInfo.id)].status = updateTaskInfo.status;

    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.handleFilterTasks(this.status);
  }

  handleRemoveTask(id: number) {
    this.tasks.splice(this.taskIndexById(id), 1);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  handleClearTasks() {
    this.tasks = [];
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  handleFilterTasks(status: Status) {
    this.status = status;
  }

  private taskIndexById(id: number): number {
    return this.tasks.findIndex((item) => item.id === id);
  }

}
