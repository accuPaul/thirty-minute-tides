import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { Station } from '../../../Station';
import { TideSelectionService } from '../../services/tide-selection.service';
import { TideStationComponent } from '../tide-station/tide-station.component';
import { SortButtonComponent } from '../sort-button/sort-button.component';

@Component({
  selector: 'app-tide-selector',
  standalone: true,
  imports: [ NgIf, NgFor, NgClass,TideStationComponent, SortButtonComponent ],
  templateUrl: './tide-selector.component.html',
  styleUrl: './tide-selector.component.css'
})
export class TideSelectorComponent {
  stations: Station[] = [];
  filteredList: Station[] = [];
  @Output() siteSelection : EventEmitter<Station> = new EventEmitter();
  filterText: string = '';
  sort = { "field" : "lng", "dir" : 1}
  sortUp:string = 'bi bi-sort-up'
  sortDown:string = 'bi bi-sort-down'
  
  constructor(private tideSelectionService: TideSelectionService) {
    this.tideSelectionService.getSites().subscribe((response) => {
      this.stations = response.stations;
      this.filteredList = this.stations
    })
  }

  setSelection(station: Station) {
    this.siteSelection.emit(station)
  }

  sortList(sortBy: any) {
    if (this.sort.field === sortBy) 
      this.sort.dir *= -1
    else
      (this.sort = { "field": sortBy, dir : 1})

      console.log(this.sort)
      switch(this.sort.field) {
        case "state" : 
        this.filteredList = this.filteredList.sort((a,b) => (a.state!.toUpperCase() < b.state!.toUpperCase()) ? 1 : 0);
          break;
        case "name" :
          this.filteredList = this.filteredList.sort((a,b) => (a.name!.toUpperCase() < b.name!.toUpperCase()) ? 1 : 0);
          break;
        case "longitude":
          this.filteredList = this.filteredList.sort((a,b) => a.lng - b.lng);
          break;
        default:
          this.filteredList = this.filteredList.sort((a,b) => a.lat - b.lat);
      }

    if (this.sort.dir < 0) this.filteredList.reverse();

    this.tideSelectionService.sortSites(sortBy);
  }

  filterList(filter: string) {
    console.log('Filter = '+filter)
    if (filter.length === 0)
      this.filteredList = this.stations;
    else
      this.filteredList = this.stations.filter((station) => station.name.toUpperCase().includes(filter.toUpperCase()) 
      || station.state === filter.toUpperCase())
  }

}
