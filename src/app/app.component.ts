import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AirEcoService } from './Service/AirEco.service';
import { AirLuxService } from './Service/AirLux.service';
import { AirProService } from './Service/AirPro.service';
import { RjdEcoService } from './Service/RjdEco.service';
import { RjdLuxService } from './Service/RjdLux.service';
import { RjdProService } from './Service/RjdPro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'agentTest';
  rates = [{
    id: 1,
    provider: "AIR",
    name: "Эконом",
    maxWeight:20,
    disabled:false
  },
  {
    id: 2,
    provider: "AIR",
    name: "Продвинутый",
    maxWeight:50,
    disabled:false
  },
  {
    id: 3,
    provider: "AIR",
    name: "Люкс",
    maxWeight:50,
    disabled:false
  },
  {
    id: 4,
    provider: "RJD",
    name: "Эконом",
    maxWeight:50,
    disabled:false
  },
  {
    id: 5,
    provider: "RJD",
    name: "Продвинутый",
    maxWeight:60,
    disabled:false
  },
  {
    id: 6,
    provider: "RJD",
    name: "Люкс",
    maxWeight:60,
    disabled:false
  }];
  distance = 0;
  age = 0;
  baggageWeight = 0;
  price = 0;
  idRace:number = 0;
  disabled!:boolean;
  ngOnInit() {
  }
  checkMaxWeight(weight:string){
    this.idRace = 0;
    this.rates.map((key)=>{
     return key.disabled = key.maxWeight < +weight;
    });    




  }
  calculations() {
    if((this.age>0)&&(this.baggageWeight>0)&&(this.distance>0)){
    let c!: any;
    switch (this.idRace.toString()) {
      case "1":
        c = new AirEcoService(this.distance, this.age, this.baggageWeight)
        this.price = c.calculationPrice().toFixed(2);
        break;
      case "2":
        c = new AirProService(this.distance, this.age, this.baggageWeight)
        this.price = c.calculationPrice().toFixed(2);
        break;
      case "3":
        c = new AirLuxService(this.distance, this.age, this.baggageWeight)
      this.price = c.calculationPrice().toFixed(2);
      break;
      case "4":
        c = new RjdEcoService(this.distance, this.age, this.baggageWeight)
      this.price = c.calculationPrice().toFixed(2);
      break;
      case "5":
        c = new RjdProService(this.distance, this.age, this.baggageWeight)
      this.price = c.calculationPrice().toFixed(2);
      break;
      case "6":
        c = new RjdLuxService(this.distance, this.age, this.baggageWeight)
      this.price = c.calculationPrice().toFixed(2);
      break;
    }
  }
  else{
    this.disabled = true;
  }

  }
}
