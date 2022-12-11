import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:44357/api/"
  constructor(private HttpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+'Cars/getCars';
    return this.HttpClient.get<ListResponseModel<Car>>(newPath)
  }
  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+'Cars/getbybrand?id='+brandId;
    return this.HttpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl+'Cars/getbycolor?id='+colorId;
    return this.HttpClient.get<ListResponseModel<Car>>(newPath);
  }
  getCarDetail(carId:number):Observable<ListResponseModel<Car>>{
      let newPath=this.apiUrl+'getcardetail?id='+carId;
      return this.HttpClient.get<ListResponseModel<Car>>(newPath)
  }

}
