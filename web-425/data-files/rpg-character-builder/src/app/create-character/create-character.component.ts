import { Component } from '@angular/core';

interface Character {
  id: number;
  name: string;
  gender: string;
  class: string;
}

@Component({
  selector: 'app-create-character',
  template: ` <p>create-character works!</p> `,
  styles: ``,
  standalone:true
})
export class CreateCharacterComponent {
  characters: Character[] = [];
  character: Character = { id: 0, name: '', gender: '', class: '' };

  // Handle form submission
  onSubmit(form: any) {
    if (form.valid) {
      const newCharacter: Character = {
        ...this.character,
        id: Math.floor(Math.random() * 1000) + 1, // Random ID between 1 and 1000
      };

      this.characters.push(newCharacter);
      this.resetForm(form); // Reset form after submission
    }
  }

  // Reset the form fields
  resetForm(form: any) {
    form.resetForm();
    this.character = { id: 0, name: '', gender: '', class: '' };
  }
}
