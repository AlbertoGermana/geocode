import { Module } from '@nestjs/common';
import { GeocodeService } from './geocode.service';
import { GeocodeController } from './geocode.controller';
import { GeocodeRepository } from './geocode.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Geocode, GeocodeSchema } from './schemas/geocode.schema';
import { HttpModule } from '@nestjs/axios';

@Module({
  providers: [GeocodeService, GeocodeRepository],
  controllers: [GeocodeController],
  imports: [MongooseModule.forFeature([{name: Geocode.name, schema: GeocodeSchema}]), HttpModule]
})
export class GeocodeModule {}
