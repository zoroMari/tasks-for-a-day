import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Status } from 'src/app/interfaces/Status';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.sass']
})
export class TabsComponent implements OnInit {
  @Output() onFilterStatus = new EventEmitter<string>();
  public readonly Status = Status;

  constructor() { }

  ngOnInit(): void {
  }

  handleFilterTasksByStatus(status: string) {
    this.onFilterStatus.emit(status);
  }
}
