import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { CarsModule } from './cars/cars.module.js';
import { BrandsModule } from './brands/brands.module.js';

@Module({
  imports: [CarsModule, BrandsModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
