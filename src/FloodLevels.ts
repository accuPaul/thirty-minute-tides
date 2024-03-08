export interface FloodLevels {
    nos_minor?: number | null; //10.40,
    nos_moderate?: number | null; // 11.33,
    nos_major?: number | null; //12.60,
    nws_minor?: number | null; //9.77,
    nws_moderate?: number | null; //10.27,
    nws_major?: number | null; //10.77,
    action?: string | null;
    self: string; //https://api.tidesandcurrents.noaa.gov/mdapi/prod/webapi/stations/8665530/floodlevels.json
}