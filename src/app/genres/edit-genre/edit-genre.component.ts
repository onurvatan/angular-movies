import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parseWebApiErrors } from 'src/app/utilities/utils';
import { genreCreateDto, genreDto } from '../genres.model';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css']
})
export class EditGenreComponent implements OnInit {

  constructor(
    private route:ActivatedRoute, 
  private service:GenresService,
    private router: Router
    ) { }

  model:genreDto;
  errors: string[]= [];
  ngOnInit(): void {
    this.route.params.subscribe(params=> {
      this.service.getById(params.id).subscribe(genre=> {
        this.model=genre;
      });
    })
  }
  
  saveChanges(genreCreteDto:genreDto){
    this.service.edit(this.model.id, genreCreteDto).subscribe(()=>{
      this.router.navigate(["/genres"]);
    },error => this.errors = parseWebApiErrors(error));
  }

}
