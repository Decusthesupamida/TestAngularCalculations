import { Inject, Injectable } from '@angular/core';
import { ITrip } from '../model/ITrip';

@Injectable()
export class RjdProService implements ITrip {
    distance: number;
    age: number;
    baggageWeight: number;
    calculationPrice(){
        let price = 0;
        let coefficientbaggageWeight = this.baggageWeight>20? 50*this.baggageWeight:0;
        let coefficientAge = this.age<8 ? 0.3:1;
        price = (this.distance*2*coefficientAge)+coefficientbaggageWeight;
        return price
    }
    

constructor(@Inject(Number) distance:number,@Inject(Number) age:number, @Inject(Number) baggageWeight:number) {
    this.distance = distance;
    this.age = age;
    this.baggageWeight = baggageWeight;

}

}
