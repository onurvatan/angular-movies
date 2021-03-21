import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreateDto, actorDto } from '../actors.model';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css']
})
export class EditActorComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  model:actorDto={
    name:'Tom Holland',
    dateOfBirth: new Date(), 
    biography:'default value',
    picture:'https://i.insider.com/600853e6e3d62500185fd576?width=700'
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=> {
     // alert(params.id)
    });
  }
  saveChanges(actorCreateDto:actorCreateDto){
    console.log(actorCreateDto);
  }

}
