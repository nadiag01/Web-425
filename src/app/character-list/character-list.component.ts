import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewCharacter } from '../create-character/create-character.component';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="main">
      <h1>
        New Character
      </h1>
      @if(newCharacter.character.name) {
        <div>
          Name: {{newCharacter.character.name}} <br />
          Gender: {{newCharacter.character.gender}} <br />
          Class: {{newCharacter.character.class}}
        </div>
      } @else {
        <p class="no-char">No new Character</p>
      }
    </div>
  `,
  styles: `
  .main {
    margin-bottom: 70px;

  }
  `
})
export class CharacterListComponent {
  @Input() newCharacter!: NewCharacter;

  constructor() {
    this.newCharacter = {
      character: {
        name: "",
        gender: "",
        class: ""
      },
      characterId: 0
    }
  }
}
