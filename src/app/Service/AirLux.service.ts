import { Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ITrip } from '../model/ITrip';

@Injectable()
export class AirLuxService implements ITrip {
    distance: number;
    age!: number;
    baggageWeight!: number;
    public sum$ = new Subject<number>();
    calculationPrice(){
        let price = 0;
        let coefficientbaggageWeight = 0;
        let coefficientAge = this.age<16 ? 0.3:1;
        price = (this.distance*15*coefficientAge)+coefficientbaggageWeight;
        
        return price
    }
    

constructor(@Inject(Number) distance:number,@Inject(Number) age:number, @Inject(Number) baggageWeight:number) {
    this.distance = distance;
    this.age = age;
    this.baggageWeight = baggageWeight;

}

}
