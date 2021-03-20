import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.movies=  [{
      title: 'Spiderman',
      releaseDate: new Date(),
      price: 1400.99,
      poster:'https://i.pinimg.com/736x/16/ea/e0/16eae0612751cc68f545df868f61f96d.jpg'
    },
    {
      title: 'Moana',
      releaseDate: new Date('2016-11-15'),
      price: 1120.99,
      poster:'https://images-na.ssl-images-amazon.com/images/I/A1JOaV3B6fL._AC_SL1500_.jpg'
    }
    
    ]
    this.moviesFuture=[];
    }
   movies;
   moviesFuture;  
  

}
