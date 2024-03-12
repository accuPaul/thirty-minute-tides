import { Component, Input } from '@angular/core';
import { TideHeight } from '../../../TideHeight';
import { DatePipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-tide-item',
  standalone: true,
  imports: [NgIf, DatePipe],
  templateUrl: './tide-item.component.html',
  styleUrl: './tide-item.component.css'
})
export class TideItemComponent {
  @Input() tideHeight!: TideHeight; 
}
