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
    let newPath=this.apiUrl+'Cars/getCarDetail'
    return this.HttpClient.get<ListResponseModel<Car>>(newPath)}
}
