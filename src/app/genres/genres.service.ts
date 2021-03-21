import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { genreCreateDto, genreDto } from './genres.model';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private httpClient : HttpClient) { }

  private apiUrl = environment.apiUrl+'/genres';

  getAll():Observable<genreDto[]>{
    return  this.httpClient.get<genreDto[]>(this.apiUrl);
  }

  getById(id:number):Observable<genreDto>{
    return this.httpClient.get<genreDto>(`${this.apiUrl}/${id}`);
  }

  create(genre:genreCreateDto){
    return this.httpClient.post(this.apiUrl,genre);
  }

  edit(id:number, genre:genreCreateDto){
    return this.httpClient.put(`${this.apiUrl}/${id}`, genre);
  }

  delete(id:number){
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }

}
