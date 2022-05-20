import { EventEmitter, Injectable, OnInit } from "@angular/core";
import { Status } from "../interfaces/Status";
import { ITask } from "../interfaces/ITask";

@Injectable({ providedIn: 'root' })
export class TasksService implements OnInit{
  private _tasks: ITask[] = [];
  public status: Status = Status.all;
  public statusChanged = new EventEmitter<Status>();
  public tasksChanged = new EventEmitter<ITask[]>();

  ngOnInit() {
  }

  public get filteredTasks(): ITask[] {
    if (this.status === Status.all) return this._tasks;
    return this._tasks.filter(({ status }) => status === this.status);
  }

  public openTasks() {
    localStorage.getItem('tasks')
      ? this._tasks = JSON.parse(localStorage.getItem('tasks'))
      : this._tasks = [];
  }

  public addTask(task: ITask) {
    this._tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(this._tasks));
    this.tasksChanged.emit(this.filteredTasks);
  }

  public changeStatus(updateTaskInfo: ITask) {
    this._tasks[this.taskIndexById(updateTaskInfo.id)].status = updateTaskInfo.status;

    localStorage.setItem('tasks', JSON.stringify(this._tasks));
    this.filterTasks(this.status);
    this.statusChanged.emit(this.status);
  }

  public removeTask(id: number) {
    this._tasks.splice(this.taskIndexById(id), 1);
    localStorage.setItem('tasks', JSON.stringify(this._tasks));
    this.tasksChanged.emit(this.filteredTasks);
  }

  public clearTasks() {
    this._tasks = [];
    localStorage.setItem('tasks', JSON.stringify(this._tasks));
    this.tasksChanged.emit(this.filteredTasks);
  }

  public filterTasks(status: Status) {
    this.status = status;
    return this.filteredTasks;
  }

  private taskIndexById(id: number): number {
    return this._tasks.findIndex((item) => item.id === id);
  }
}
