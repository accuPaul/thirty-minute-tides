import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Station } from '../../../Station';

@Component({
  selector: 'app-tide-station',
  standalone: true,
  imports: [],
  templateUrl: './tide-station.component.html',
  styleUrl: './tide-station.component.css'
})
export class TideStationComponent {
  @Input() station!: Station;
  @Output() onSelectStation: EventEmitter<Station> = new EventEmitter();

  onSelect(station: Station) {
    this.onSelectStation.emit(station)
  }

}
