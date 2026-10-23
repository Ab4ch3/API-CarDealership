import { Injectable } from '@nestjs/common';
import { CarsService } from '../cars/cars.service.js';
import { CARS_SEED } from './data/cars.seed.js';
import { BrandsService } from '../brands/brands.service.js';
import { BRANDS_SEED } from './data/brand.seed.js';

@Injectable()
export class SeedService {
  /**
   *
   */
  constructor(
    private readonly carsServices: CarsService,
    private readonly bransServices: BrandsService,
  ) {}

  populateDB() {
    this.carsServices.fillCarsWithSeedData(CARS_SEED);
    this.bransServices.fillBrandsWithSeedData(BRANDS_SEED);
    return `SEED Executed Succesfull`;
  }
}
