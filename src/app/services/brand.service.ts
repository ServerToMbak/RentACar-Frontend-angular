import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl="https://localhost:44357/api/"
  constructor(private HttpClint:HttpClient) { }

  getbrands():Observable<ListResponseModel<Brand>>{
    let newPath=this.apiUrl+'Brands/GetAll'
    return this.HttpClint.get<ListResponseModel<Brand>>(newPath)
  }
}
