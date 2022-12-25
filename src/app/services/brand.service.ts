import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl="https://localhost:44357/api/"
  constructor(private HttpClient:HttpClient) { }

  getbrands():Observable<ListResponseModel<Brand>>{
    let newPath=this.apiUrl+'Brands/GetAll'
    return this.HttpClient.get<ListResponseModel<Brand>>(newPath)
  }
  addBrand(brand:Brand):Observable<ResponseModel>
  {
    return this.HttpClient.post<ResponseModel>(this.apiUrl+"Brands/Add",brand);
  }
}
