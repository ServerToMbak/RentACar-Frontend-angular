import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44357/api/"

  getCustomers():Observable<ListResponseModel<Customer>>{
    let newPath=this.apiUrl+"Customers/getAll"
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }
}
