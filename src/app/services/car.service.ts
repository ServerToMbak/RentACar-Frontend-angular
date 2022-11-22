import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:44357/api/Cars/GetAll"
  constructor(private HttpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    return this.HttpClient.get<ListResponseModel<Car>>(this.apiUrl)}
}
