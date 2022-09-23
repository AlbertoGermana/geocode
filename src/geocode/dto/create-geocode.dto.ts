import { IsNumber } from "class-validator";

export class CreateGeocodeDto{
    @IsNumber()
    idPunto: number;
    
    lat: string;
    lon: string;
}