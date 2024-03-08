import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sort-button',
  standalone: true,
  imports: [],
  templateUrl: './sort-button.component.html',
  styleUrl: './sort-button.component.css'
})
export class SortButtonComponent {
  @Input() text!: string;
  @Input() sortField!: string;
  @Output() doSort: EventEmitter<string> = new EventEmitter()

  onSortClick(field: string) {
    this.doSort.emit(field)
  }

}
