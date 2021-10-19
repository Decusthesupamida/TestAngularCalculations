import { Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ITrip } from '../model/ITrip';

@Injectable({
    providedIn: 'root',
  })
export class AirEcoService implements ITrip {
    distance: number;
    age!: number;
    baggageWeight!: number;
    public sum$ = new Subject<number>();
    calculationPrice(){
        let price = 0;
        let coefficientbaggageWeight = this.baggageWeight>5 ? 4000:0;
        price = this.distance*4+coefficientbaggageWeight;
        return price
    }
    

constructor(@Inject(Number) distance:number,@Inject(Number) age:number, @Inject(Number) baggageWeight:number) {
    this.distance = distance;
    this.age = age;
    this.baggageWeight = baggageWeight;

}
    
}
