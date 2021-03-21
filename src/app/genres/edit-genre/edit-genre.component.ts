import { Component, OnInit } from '@angular/core';
import { genreCreateDto } from '../genres.model';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css']
})
export class EditGenreComponent implements OnInit {

  constructor() { }

  model:genreCreateDto= {name: 'Drama'}

  ngOnInit(): void {
  }
  
  saveChanges(genreCreteDto:genreCreateDto){

  }

}
