import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:Car[]=[];
  constructor(private carService:CarService, private activtedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  this.activtedRoute.params.subscribe(params=>{
    if(params["brandId"]){
      this.getCarsByBrand(params["brandId"])
    }else if(params["colorId"]){
      this.getCarsByColor(params["colorId"])
    }else{
        this.getCars()
    }
  })
  }
  getCars (){
   this.carService.getCars().subscribe(response=>{
    this.cars=response.data
    });
  }
  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars=response.data
    });
  }
  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.cars=response.data
    });
  }
  getCarDetail(carId:number){
    this.carService.getCarDetail(carId).subscribe(Response=>{
      this.cars=Response.data
    });
  }
}
