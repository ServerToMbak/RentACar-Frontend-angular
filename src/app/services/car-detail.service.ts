import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponsModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiUrl="https://localhost:44357/api/"

  constructor(private httpClient:HttpClient) { }

  getCarDetail(carId:number):Observable<SingleResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"Cars/getcardetail?id="+carId;
    return this.httpClient.get<SingleResponseModel<CarDetail>>(newPath);
  }

}
