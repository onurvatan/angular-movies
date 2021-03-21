import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  form:FormGroup;

  genres = [
    {id:1, name:'Drama'},
   {id:2, name:'Action'},
   {id:3, name:'Science'}

  ]

  movies = [
    {title: 'Spider-Man',poster:'https://i.pinimg.com/736x/16/ea/e0/16eae0612751cc68f545df868f61f96d.jpg'},
    {title: 'Moana',poster:'https://images-na.ssl-images-amazon.com/images/I/A1JOaV3B6fL._AC_SL1500_.jpg'},
    {title: 'Inception',poster:'https://images-na.ssl-images-amazon.com/images/I/912AErFSBHL._AC_SL1500_.jpg'}
  ]

  originalMovies =this.movies;

  ngOnInit(): void {
  this.form = this.formBuilder.group({
    title: '',
    genreId:0,
    upcomingReleases:false,
    inTheaters:false
  })

  this.form.valueChanges.subscribe(values=> {
    this.movies=this.originalMovies;
    this.filter(values);
  })

  }

  cleanForm(){
      this.form.reset();
  }

  filter(values:any){
    if(values.title){
      this.movies= this.movies.filter(movie=> movie.title.indexOf(values.title) !==-1);
    }
  }

}
