export interface Station {
    id: string;
    state? : string | null;
    name: string;
    lat: number;
    lng: number;
    type?: string | null;
    portscode?: string | null;
    reference_id: string;
    [propName: string] : any;
} 

/*  Extra data types...

tidepredoffsets: Link;
    timemeridian: number;
    reference_id: string;
    timezonecorr: number;
    affiliations?: string;
    
    products?: string;
    disclaimers?: Array<string>;
    notices?: Array<string>;
    self?: string;
    expand?: string;
    tideType?: string*/
