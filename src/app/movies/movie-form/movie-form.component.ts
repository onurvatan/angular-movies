import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { multipleSelectorModel } from 'src/app/utilities/multiple-selector/multiple-selector';

import { movieCreateDto } from '../movies.model';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  nonSelectedGenres: multipleSelectorModel[] = [
    { key: 1, value: 'Drama' },
    { key: 2, value: 'Action' },
    { key: 3, value: 'Comedy' }

  ];
  selectedGenres: multipleSelectorModel[] = [];


  nonSelectedTheaters: multipleSelectorModel[] = [
    { key: 1, value: 'Agora' },
    { key: 2, value: 'Rexx' },
    { key: 3, value: 'Mega' }

  ];
  selectedTheaters: multipleSelectorModel[] = [];

  
  @Output()
  onSaveChanges = new EventEmitter<movieCreateDto>();

  @Input()
  model: movieCreateDto;
  form: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', {
        validators: [Validators.required]
      }],
      summary: '',
      inTheaters: false,
      trailer: '',
      releaseDate: '',
      poster: '',
      genresIds: '',
      movieTheaterIds:''
    })

    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  saveChanges() {
    const genresIds = this.selectedGenres.map(value => value.key);
    this.form.get('genresIds').setValue(genresIds);

    const movieTheaterIds = this.selectedTheaters.map(value => value.key);
    this.form.get('movieTheaterIds').setValue(movieTheaterIds);

    this.onSaveChanges.emit(this.form.value);
  }

  onImageSelected(file: File) {
    this.form.get('poster').setValue(file);
  }

  changeMarkdown(content: string) {
    this.form.get('summary').setValue(content);
  }
}
