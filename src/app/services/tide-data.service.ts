import { Injectable } from '@angular/core';
import { Prediction } from '../../Prediction';
import { PREDICTION } from '../../mock_prediction';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Station } from '../../Station';

@Injectable({
  providedIn: 'root'
})
export class TideDataService {
  private API_URL_BASE: string = "https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?date=today&product=predictions&datum=MLLW&time_zone=lst_ldt&units=english&format=json";

  constructor(private http: HttpClient) { }

  getPrediction(station: Station): Observable<Prediction> {
    const interval = station.type == "R"?"30":'hilo'
    const url = `${this.API_URL_BASE}&interval=${interval}&station=${station.id}`
    return this.http.get<Prediction>(url);
  }
}
