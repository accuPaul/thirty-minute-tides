import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { Station } from '../../Station'
import { STATION } from '../../mock_station';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TideSelectionService {
  private stationUrl = 'https://api.tidesandcurrents.noaa.gov/mdapi/prod/webapi/stations.json?type=tidepredictions'
  private station? : Station | null;
  private subject = new Subject<any>();
  @Output() onShowSelector: EventEmitter<boolean> = new EventEmitter()
  private showSelector: boolean = false;
  private stationList : Station[] = [];
  private filteredList : Station[] = [];
  @Output() onListUpdate : EventEmitter<Station[]> = new EventEmitter();

  constructor(private http:HttpClient) {
    const savedStation = localStorage.getItem('station');
    if (savedStation !== null) 
      this.station = JSON.parse(savedStation)
    else this.station = null;
   }

   setTideStation(newStation: Station) {
    this.station = newStation
    localStorage.setItem('station',JSON.stringify(newStation))
    console.log(`Saved station ${this.station}`)
    this.subject.next(this.station)
   }

   onSetStation() : Observable<any> {
    return of(this.station);
   }

   toggleShowSelector(): void {
      this.showSelector = ! this.showSelector;
      this.subject.next(this.showSelector)
      this.onShowSelector.emit(this.showSelector)
   }

   onToggle() : Observable<any> {
    return this.onShowSelector.asObservable();
   }

   getSites() : Observable<any>{
    return this.http.get(this.stationUrl);
   }

   filterSites(filter: string) : void {
    this.filteredList = this.stationList.filter((station) => station.name.toUpperCase().includes(filter.toUpperCase()) 
      || station.state === filter.toUpperCase())
    this.onListUpdate.emit(this.filteredList)
   }

   sortSites(sortBy: string) : void {
      switch(sortBy) {
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

    this.onListUpdate.emit(this.filteredList)
   }

}
