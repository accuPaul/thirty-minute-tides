import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TideItemComponent } from './components/tide-item/tide-item.component';
import { TideSelectorComponent } from './components/tide-selector/tide-selector.component';
import { TidesComponent } from './components/tides/tides.component';
import { TideStationComponent } from './components/tide-station/tide-station.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    ButtonComponent,
    TideItemComponent,
    TideSelectorComponent,
    TideStationComponent,
    TidesComponent,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'thirty-minute-tides';
}
