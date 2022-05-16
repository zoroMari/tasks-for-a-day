import { Component } from '@angular/core';
import { ITask } from './interfaces/ITask';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  tasks: ITask[] = [];

  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  handleAddTask(task: ITask) {
    this.tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  handleChangeStatus(updateTaskInfo: { id: number, newStatus: string}) {
    this.tasks[updateTaskInfo.id].status = updateTaskInfo.newStatus;

    localStorage.setItem('tasks', JSON.stringify(this.tasks));

  }

  handleRemoveTask(id: number) {
    if (id > -1) {
      this.tasks.splice(id, 1);
    }

    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  handleClearTasks() {
    this.tasks = [];

    localStorage.setItem('tasks', JSON.stringify(this.tasks));

  }

}
