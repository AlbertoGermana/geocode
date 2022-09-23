import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { CreateGeocodeDto } from './dto/create-geocode.dto';
import { GeocodeService } from './geocode.service';
import { Geocode } from './schemas/geocode.schema';
import { HttpService } from '@nestjs/axios';

@Controller('geocode')
export class GeocodeController {
    
    constructor(private readonly geocodeService: GeocodeService, private readonly httpService: HttpService){}

    @Get()
    gecode(@Query() query:string): Promise<any>{
        return this.geocodeService.geocodeAddress(query);
    }

    // @Post()
    // async createGeocode(@Body() createGeocodeDto: CreateGeocodeDto): Promise<Geocode>{
    //     return this.geocodeService.createGeocode(createGeocodeDto.idPunto, createGeocodeDto.lat, createGeocodeDto.lon)
    // }
}
