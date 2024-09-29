import { Component } from '@angular/core';
import {  FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Character {
  name: string;
  gender: string;
  class: string;
  faction?: string;
  startingLocation?: string;
  funFact?: string;
}

interface NewCharacter {
  character: Character;
  characterId: number;
}

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrl: `./create-character.component.css`,
  standalone:true,
  imports: [FormsModule, CommonModule]
})
export class CreateCharacterComponent {
  characters: Character[] = [
    { name: 'Thorn', gender: 'Male', class: 'Warrior', faction: 'The Iron Brotherhood', startingLocation: 'Ironhold', funFact: 'Thorn once single-handedly defeated a dragon.' },
    { name: 'Badger', gender: 'Female', class: 'Mage', faction: 'The Forest', startingLocation: 'Cavern', funFact: 'Badger has protective skin that is tough to penetrate in combat.' },
    { name: 'Tank', gender: 'Male', class: 'Rogue', faction: 'Hounds of the Oasis', startingLocation: 'Hideaway', funFact: 'Tank can craft and store up to 5 weapons' },
    { name: 'Rose', gender: 'Female', class: 'Warrior', faction: 'The Iron Brothers', startingLocation: 'Ironhold', funFact: 'Rose has the ability to take down seven enemies in one strike.' },
    { name: 'L', gender: 'Male', class: 'Mage', faction: 'The Forest', startingLocation: 'Cavern', funFact: 'L is super intellegent and witty, he uses this to his advantage.' },
    { name: 'Suki', gender: 'Female', class: 'Rogue', faction: 'Hounds of the Oasis', startingLocation: 'Hideaway', funFact: 'Suki has a great eye of buying favorable goods.' },
    { name: 'Eren', gender: 'Male', class: 'Warrior', faction: 'The Iron Brotherhood', startingLocation: 'Ironhold', funFact: 'Eren can defeat enemies twice his size with ease' },
    { name: 'Cloud', gender: 'Female', class: 'Mage', faction: 'The Forest', startingLocation: 'Cavern', funFact: 'Cloud carries a huge sword.' },
    { name: 'Minato', gender: 'Male', class: 'Rouge', faction: 'Hounds of the Oasis', startingLocation: 'Hideaway', funFact: 'Minato has lightning speed.' },
    { name: 'Usagi', gender: 'Female', class: 'Warrior', faction: 'The Ironbrotherhood', startingLocation: 'Ironhold', funFact: 'Fights for love and justice.' },
  ];
  character: Character = { name: '', gender: '', class: '' };
  characterId: number;
  name: string;
  gender: string;
  class: string;
  newCharacter: NewCharacter;

  constructor() {
    this.characterId = 0;
    this.name = "";
    this.gender = "";
    this.class = "";
    this.newCharacter = {character: this.character, characterId: 0}
  }

  // Handle form submission
  onSubmit() {
    this.characterId = Math.floor(Math.random() * 1000) + 1;

    let formCharacter = {
      name: this.name,
      gender: this.gender,
      class: this.class
    }

    this.characters.push(formCharacter);

    this.newCharacter = {
      character: formCharacter,
      characterId: this.characterId
    }

    this.resetForm()
    // if (form.valid) {
    //   const newCharacter: Character = {
    //     ...this.character,
    //     id: Math.floor(Math.random() * 1000) + 1, // Random ID between 1 and 1000
    //   };

    //   this.characters.push(newCharacter);
    //   this.resetForm(form); // Reset form after submission
    // }
  }

  // Reset the form fields
  resetForm() {
    //form.resetForm();
    this.name = "";
    this.gender = "";
    this.class = ""
  }
}
