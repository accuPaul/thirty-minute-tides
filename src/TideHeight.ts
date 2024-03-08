export interface TideHeight {
    t: string;  // time in local prevailing time, formatted like yyyy-mm-dd HH:MM
    v: string;  // tide height in feet from MLLW
    type?: string; // "H" or "L", only used for daily high and low tides
}