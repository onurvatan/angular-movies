import { Component, OnInit } from '@angular/core';
import { movieCreateDto, movieDto } from '../movies.model';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  model: movieDto= {
  title:'Spider',
  trailer:'asdasda',
    inTheaters:true,
    summary:'asdsad',
    releaseDate: new Date(),
    poster:'https://i.pinimg.com/736x/16/ea/e0/16eae0612751cc68f545df868f61f96d.jpg',
    genresIds:[1,2],
    movieTheaterIds:[1,2]

  }
  constructor() { }

  ngOnInit(): void {
  }

  saveChanges(movieDto:movieCreateDto){

  }

}
