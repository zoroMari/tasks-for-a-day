import { Directive, ElementRef, Input } from "@angular/core";
import { Status } from "../interfaces/Status";
import { StatusColor } from "../interfaces/StatusColor";

@Directive({
  selector: '[appStatusColor]'
})
export class StatusColorDirective {
  @Input() public appStatusColor: string;
  @Input() public set status(value: string) {
    if (!this.appStatusColor) return;
    this._elementRef.nativeElement.style[this.appStatusColor] = this.statusColor(value);
  }

  constructor(
    private readonly _elementRef: ElementRef<HTMLElement>,
  ) { }

  public statusColor(status: string): string {
    switch(status) {
      case Status.toDo:
        return StatusColor.toDo;
      case Status.inWork:
        return StatusColor.inWork;
      case Status.done:
        return StatusColor.done;
      default:
        return '#ddd';
    }
  }
}
