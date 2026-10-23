import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { ICar } from './interfaces/car.interface.js';
import { CreateCarDto, UpdateCarDto } from './dto/index.js';

@Injectable()
export class CarsService {
  private cars: ICar[] = [
    // {
    //   id: uuid(),
    //   brand: 'toyota',
    //   model: 'corolla',
    // },
    // {
    //   id: uuid(),
    //   brand: 'honda ',
    //   model: 'civic',
    // },
    // {
    //   id: uuid(),
    //   brand: 'Jeep',
    //   model: 'Cherokee',
    // },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const cars = this.cars.find((car) => car.id === id);

    if (!cars) throw new NotFoundException(`Car With id '${id}' not found`);

    return cars;
  }

  create(CreateCarDto: CreateCarDto) {
    const car: ICar = {
      id: uuid(),
      ...CreateCarDto,
    };

    this.cars.push(car);

    return car;
  }

  update(id: string, UpdateCarDto: UpdateCarDto) {
    let carDB = this.findOneById(id);

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = { ...carDB, ...UpdateCarDto, id };

        return carDB;
      }

      return car;
    });

    return carDB;
  }

  delete(id: string) {
    const car = this.findOneById(id);

    this.cars = this.cars.filter((car) => car.id !== id);
  }

  fillCarsWithSeedData(cars: ICar[]) {
    this.cars = cars;
  }
}
