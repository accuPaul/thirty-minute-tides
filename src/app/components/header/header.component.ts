import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TideSelectionService } from '../../services/tide-selection.service';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ ButtonComponent ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  title: string = '30-Minute Tides'
  stationSelected: boolean = false;
  showSelectStation: boolean = false;
  
  constructor(private tideSelectionService: TideSelectionService) {
  }

  ngOnInit(): void {
    this.tideSelectionService.onSetStation().subscribe((value) => this.stationSelected = value !== null)
  }

  toggleShowSelection() {
    this.tideSelectionService.toggleShowSelector()
  }
}
