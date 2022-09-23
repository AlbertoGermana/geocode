import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"

export type GeocodeDocument = Geocode & Document;

@Schema()
export class Geocode{
    @Prop()
    idPunto: number;

    @Prop()
    lat: string;

    @Prop()
    lon: string;
}

export const GeocodeSchema = SchemaFactory.createForClass(Geocode);