import { Inject, Injectable } from '@angular/core';
import { ITrip } from '../model/ITrip';

@Injectable()
export class RjdLuxService implements ITrip {
    distance: number;
    age: number;
    baggageWeight: number;
    calculationPrice(){
        let price = 0;
        let coefficientbaggageWeight = 0;
        let coefficientAge = this.age<16 ? 0.2:1;
        price = (this.distance*4+coefficientbaggageWeight)*coefficientAge;
        return price
    }
    

constructor(@Inject(Number) distance:number,@Inject(Number) age:number, @Inject(Number) baggageWeight:number) {
    this.distance = distance;
    this.age = age;
    this.baggageWeight = baggageWeight;

}

}
