import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { TideSelectionService } from '../../services/tide-selection.service';
import { Station } from '../../../Station';
import { Prediction } from '../../../Prediction';
import { Subscription } from 'rxjs';
import { TideSelectorComponent } from '../tide-selector/tide-selector.component';
import { TideItemComponent } from '../tide-item/tide-item.component';
import { TideDataService } from '../../services/tide-data.service';

@Component({
  selector: 'app-tides',
  standalone: true,
  imports: [NgIf, NgFor, TideSelectorComponent, TideItemComponent],
  templateUrl: './tides.component.html',
  styleUrl: './tides.component.css'
})
export class TidesComponent implements OnInit {
  station?: Station | null = null;
  prediction: Prediction = { "predictions" : []}
  showSelector: boolean = false;
  toggleSubscription: Subscription;

  constructor(private tideSelectionService: TideSelectionService, private tideDataService: TideDataService) {
    this.toggleSubscription = this.tideSelectionService
    .onToggle()
    .subscribe((value) => {
      this.showSelector = value
    })
  }

  ngOnInit(): void {
    this.tideSelectionService.onSetStation().subscribe((station) => { 
        this.station = station
        if (station === null) 
          this.showSelector = true;
        else {
          this.tideDataService
          .getPrediction(this.station!)
          .subscribe((prediction) => this.prediction = prediction);
        }
      });
  }

  onSiteSelection(station: Station) {
    if (station != null) {
      this.tideSelectionService.setTideStation(station);
      this.station = station
      this.tideDataService.getPrediction(station).subscribe((tideData) => {
        this.prediction = tideData
        this.showSelector = false; // don't show tide data until it is fetched
      })
    }
  }
  
}
