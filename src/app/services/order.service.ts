import { Injectable } from '@angular/core';
import { environment } from '../../../src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseUrl = environment.url
  orders: null;
  constructor( private  http: HttpClient) { }
  getOrders() {
   return  this.http.get(`${this.baseUrl}`)
  }
     
}
