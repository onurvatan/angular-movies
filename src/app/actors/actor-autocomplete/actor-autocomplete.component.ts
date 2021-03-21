import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-actor-autocomplete',
  templateUrl: './actor-autocomplete.component.html',
  styleUrls: ['./actor-autocomplete.component.css']
})
export class ActorAutocompleteComponent implements OnInit {

  constructor() { }

  control: FormControl = new FormControl();

  actors = [
    { name: 'Tom Hanks', picture: 'https://www.gannett-cdn.com/presto/2020/07/09/USAT/b850c175-4d38-49fe-9bf7-6950c37657ab-tom_hanks_67.JPG?crop=3647,2052,x0,y820&width=3200&height=1801&format=pjpg&auto=webp' },
    { name: 'Tom Holland', pictrue: 'https://i.insider.com/600853e6e3d62500185fd576' }
  ]

  selectedActors = [];
  originalActors = this.actors;

  columsToDisplay = ['picture', 'name', 'character', 'actions'];

  @ViewChild(MatTable) table: MatTable<any>;

  ngOnInit(): void {

    this.control.valueChanges.subscribe(value => {
      this.actors = this.originalActors;
      this.actors = this.actors.filter(actor => actor.name.indexOf(value) !== -1);
    })
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    console.log(event.option.value);
    this.selectedActors.push(event.option.value);
    this.control.patchValue('');
    if (this.table !== undefined) {
      this.table.renderRows();
    }
  }

  remove(actor) {
    const index = this.selectedActors.findIndex(a => a.name === actor.name);
    this.selectedActors.splice(index, 1);
    this.table.renderRows();

  }

  dropped(event:CdkDragDrop<any[]>){
    const previousIndex = this.selectedActors.findIndex(a=> a == event.item.data);
    moveItemInArray(this.selectedActors,previousIndex,event.currentIndex);
    this.table.renderRows();

  }

}
