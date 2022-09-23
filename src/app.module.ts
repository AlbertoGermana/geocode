import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeocodeModule } from './geocode/geocode.module';

@Module({
  imports: [GeocodeModule, MongooseModule.forRoot('mongodb+srv://Alberto_test:ciaociao@cluster0.rob4umd.mongodb.net/geocode')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
