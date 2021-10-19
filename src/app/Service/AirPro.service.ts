import { Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ITrip } from '../model/ITrip';

@Injectable()
export class AirProService implements ITrip {
    distance: number;
    age!: number;
    baggageWeight!: number;
    public sum$ = new Subject<number>();
    calculationPrice(){
        let price = 0;
        let coefficientbaggageWeight = this.baggageWeight>20? 5000:0;
        let coefficientAge = this.age<7 ? 0.3:1;
        price = (this.distance*8*coefficientAge)+coefficientbaggageWeight;
        
        return price
    }
    

constructor(@Inject(Number) distance:number,@Inject(Number) age:number, @Inject(Number) baggageWeight:number) {
    this.distance = distance;
    this.age = age;
    this.baggageWeight = baggageWeight;

}

}
