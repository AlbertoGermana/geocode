import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Geocode, GeocodeDocument } from "./schemas/geocode.schema";

@Injectable()
export class GeocodeRepository{

    constructor(@InjectModel(Geocode.name) private geocodeModel: Model<GeocodeDocument>){}

    async create(geocode: Geocode): Promise<Geocode>{
        const newGeocode = new this.geocodeModel(geocode);
        return newGeocode.save()
    }
}