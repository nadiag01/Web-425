import { Component } from '@angular/core';

interface Character {
  name: string;
  gender: string;
  class: string;
  faction: string;
  startingLocation: string;
  funFact: string;
}

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [],
  template: `
    <div class="players-list">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Class</th>
          <th>Faction</th>
          <th>Starting Location</th>
          <th>Fun Fact</th>
        </tr>
      </thead>
      <tbody>
        @for(character of characters; track character) {
        <tr class='character-item'>
          <td>{{ character.name }}</td>
          <td>{{ character.gender }}</td>
          <td>{{ character.class }}</td>
          <td>{{ character.faction }}</td>
          <td>{{ character.startingLocation }}</td>
          <td>{{ character.funFact }}</td>
        </tr>
        }
      </tbody>
    </table>
  </div>


  `,
  styles: `.players-list {
    width: 100%;
    margin: 20px auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th, td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }

  th {
    background-color: #f4f4f4;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  `
})
export class PlayersComponent {
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

}
