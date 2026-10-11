import { Injectable, NotFoundException } from '@nestjs/common';
import { retry } from 'rxjs';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'toyota',
      model: 'corolla',
    },
    {
      id: 2,
      brand: 'honda ',
      model: 'civic',
    },
    {
      id: 3,
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    const cars = this.cars.find((car) => car.id === id);

    if (!cars) throw new NotFoundException(`Car With id '${id}' not found`);

    return cars;
  }
}
