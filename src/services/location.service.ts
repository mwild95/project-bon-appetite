import { Injectable } from '@angular/core';

declare var google:any;

@Injectable()
export class LocationService {


    constructor ( ) {

    }

    getLongAndLat ( _number, _street, _city, _postcode) : Promise<Object> {
        let query = _number + _street + _city + _postcode;
        var geocoder = new google.maps.Geocoder();

        return new Promise( (resolve, reject) => {
            geocoder.geocode({'address':query}, (results, status)=>{
                if(status =='OK'){
                    resolve(results[0]);
                } else {
                    return reject(status);
                }
            });
            
        });
    }
    
}