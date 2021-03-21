import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstLetterUppercase } from 'src/app/Validators/firstLetterUppercase';
import { genreCreateDto } from '../genres.model';

@Component({
  selector: 'app-form-genre',
  templateUrl: './form-genre.component.html',
  styleUrls: ['./form-genre.component.css']
})
export class FormGenreComponent implements OnInit {
 

  constructor(private formBuilder: FormBuilder) { }

  form:FormGroup

  @Input()
  model: genreCreateDto;

  @Output()
  onSaveChanges: EventEmitter<genreCreateDto> = new EventEmitter<genreCreateDto>()

  ngOnInit(): void {
    this.form= this.formBuilder.group({
      name:['', {
        validators: [Validators.required, Validators.minLength(3), firstLetterUppercase()]
      }]
    })

    if(this.model !==  undefined){
      this.form.patchValue(this.model);
    }
  }

  saveChanges(){
    this.onSaveChanges.emit(this.form.value);
  }

  getErrorMessageByFieldName(){
    const field = this.form.get('name');
    if(field.hasError('required')){
      return 'Name field is required';
    }

    if(field.hasError('minlength')){
      return 'Name field  minLength is 3';
    }

    if(field.hasError('firstLetterUppercase')){
      return field.getError('firstLetterUppercase').message;
    }
    return ''
  }
}
