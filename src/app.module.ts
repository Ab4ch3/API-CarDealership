import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { CarsModule } from './cars/cars.module.js';

@Module({
  imports: [CarsModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
