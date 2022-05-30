import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PRODUCTS } from 'src/app/mock_product';





@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  products = [
    {
      id:1,
      title:'Chicken skewersa',
      price: 20,
      image:"https://i.postimg.cc/BQ1dSxbH/skewersbackground.jpg"
     },
  
     {
      id:2,
      title:'BBQ chicken mini pizza',
      price: 35,
      image:"https://i.postimg.cc/d0chXTjB/BBQ-chicken-pizza.jpg"
     },
  
     {
      id:3,
      title:'Chicken skewersa',
      price: 30,
      image:""
     },
  
  
     {
      id:4,
      title:'Cheesy pizza slice',
      price: 45,
      image:""
     },
  
     {
      id:5,
      title:'Beef Burger',
      price: 80,
      image:""
     },
  
     {
      id:6,
      title:'Spaghetti and Bolognese',
      price: 105,
      image:""
     },
     {
      id:7,
      title:'Oreo Cake',
      price: 50,
      image:"https://i.postimg.cc/02FPZkMd/oreocake.jpg"
  
     },
     {
      id:8,
      title:'Pepper Mint tart',
      price: 50,
      image:""
     },
     {
      id:9,
      title:'Moose trackk icecream',
      price: 45,
      image:""
     },
  
     {
      id:10,
      title:'Moose trackk icecream',
      price: 46,
      image:""
     },
     {
      id:11,
      title:'Coke',
      price: 20,
      image:""
     },
     {
      id:12,
      title:'Riverdale Milkshake',
      price: 20,
      image:""
     },
     {
      id:13,
      title:'Orange juice',
      price: 20,
      image:""
     },
     
  ]

  cart: any = []
  value = 1
  constructor() { }

  ngOnInit(): void {
  }

  addToCart(i: number){
    let data = {
      quantity: this.value,
      ...this.products[i]
    } 
    
  this.cart.push(data)
    console.log(this.cart)
    localStorage.setItem('cart', JSON.stringify(this.cart))
    
  }
  
}