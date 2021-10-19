import { Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ITrip } from '../model/ITrip';

@Injectable()
export class RjdEcoService implements ITrip {
    distance: number;
    age!: number;
    baggageWeight!: number;
    calculationPrice(){
        let price = 0;
        let coefficientbaggageWeight = this.baggageWeight>15? 5*this.baggageWeight:0;
        let coefficientAge = this.age<5 ? 0.5:1;
        price = (this.distance*0.5*coefficientAge)+coefficientbaggageWeight;
                return price
    }
    

constructor(@Inject(Number) distance:number,@Inject(Number) age:number, @Inject(Number) baggageWeight:number) {
    this.distance = distance;
    this.age = age;
    this.baggageWeight = baggageWeight;

}

}
