import { Component } from '@angular/core';
import { ITask } from './interfaces/ITask';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  tasks: ITask[] = [
    {
      name: 'Running',
      status: 'TO DO',
    },
    {
      name: 'Breakfast',
      status: 'DONE',
    },
  ]

  handleAddTask(task: ITask) {
    this.tasks.push(task);
  }

  handleChangeStatus(updateTaskInfo: { id: number, newStatus: string}) {
    this.tasks[updateTaskInfo.id].status = updateTaskInfo.newStatus;
  }

  handleRemoveTask(id: number) {
    if (id > -1) {
      this.tasks.splice(id, 1);
    }
  }

  handleClearTasks() {
    this.tasks = [];
  }

}
