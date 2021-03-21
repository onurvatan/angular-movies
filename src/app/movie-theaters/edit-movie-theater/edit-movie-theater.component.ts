import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieTheathersCreateDto, movieTheathersDto } from '../movie-theaters.models';

@Component({
  selector: 'app-edit-movie-theater',
  templateUrl: './edit-movie-theater.component.html',
  styleUrls: ['./edit-movie-theater.component.css']
})
export class EditMovieTheaterComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
 
  model:movieTheathersDto={ name: 'Agora' , longitude:389.16870117187506, latitude: 40.95864123118629}

  ngOnInit(): void {
    this.route.params.subscribe(params=> {

    })
  }
  
  onSaveChanges(movieT : movieTheathersCreateDto){

  }
}
