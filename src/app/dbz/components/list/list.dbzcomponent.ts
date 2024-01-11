import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dbz-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.dbzcomponent.html',
  styleUrl: './list.dbzcomponent.css'
})
export class ListDBZComponent {

  @Input()
  public characterList: Character[]=[{
    name: 'Trunks',
    power:10
  }]

  @Output()
  public onDelete: EventEmitter <string> = new EventEmitter();



  onDeleteCharacter(id?:string): void {

    if(!id)return;

    this.onDelete.emit(id);

  }

}
