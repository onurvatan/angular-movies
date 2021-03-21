import { Component, OnInit } from '@angular/core';
import { movieTheathersCreateDto } from '../movie-theaters.models';

@Component({
  selector: 'app-create-movie-theater',
  templateUrl: './create-movie-theater.component.html',
  styleUrls: ['./create-movie-theater.component.css']
})
export class CreateMovieTheaterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saveChanges(movieTheater: movieTheathersCreateDto) {
    console.log(movieTheater);
  }

}
