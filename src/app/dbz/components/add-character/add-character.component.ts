import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-dbz-add-character',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character>= new EventEmitter();


  public character: Character = {
    name: '',
    power: 0
  };

  emitCharacter():void{



    this.onNewCharacter.emit(this.character);



  };

}
