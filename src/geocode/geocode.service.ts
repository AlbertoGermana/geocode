import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { GeocodeRepository } from './geocode.repository';
import { Geocode } from './schemas/geocode.schema';
import { lastValueFrom } from 'rxjs';

var qs = require('qs')

@Injectable()
export class GeocodeService {

    
    constructor(private readonly geocodeRepository: GeocodeRepository, private readonly httpService: HttpService){}
    
    async geocodeAddress(params): Promise<any>{
        const key = params.key; // API_key
        const GEOCODE_SERVICE_URL = 'https://maps.googleapis.com/maps/api/geocode/json?';
        
        let address = params.indirizzo.replace(";", "");

        let querystring = qs.stringify({address, key})

        let url = GEOCODE_SERVICE_URL + querystring

        const response_ = this.httpService.get(url);
        const response = await lastValueFrom(response_);
        const lat = response.data.results[0].geometry.location.lat;
        const lng = response.data.results[0].geometry.location.lng;

        return `${params.id_punto};${lat};${lng}`;

    }

    // async createGeocode(idPunto: number, lat: string, lon: string): Promise<Geocode>{
    //     return this.geocodeRepository.create({
    //         idPunto: idPunto, 
    //         lat: lat, 
    //         lon: lon
    //     })
    // }

}