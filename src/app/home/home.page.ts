import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { OrderService } from '../services/order.service';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers : [CallNumber]
})
export class HomePage implements OnInit{
  orders: null;
  constructor(private orderService: OrderService, private platform: Platform,private callNumber: CallNumber) {}
  ngOnInit() {
    this.getOrders()
   }
  getOrders(){
    console.log(this.orderService.getOrders());
    this.orderService.getOrders().subscribe((data:any)=>{
      this.orders = data.orders
    })
  }
  location(location: any) {
    let destination = location.lat + ',' + location.long;
    if (this.platform.is('android')) {
      window.location.href = 'geo:' + destination;
    } else {
      window.location.href = 'maps://maps.apple.com/?q=' + destination;
    }
  }
  phone(number:any){
  this.callNumber.callNumber(number, true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }
}
