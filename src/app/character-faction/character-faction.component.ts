import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-faction',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="faction-list">
      @if(characterFactions) {
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          @for(faction of characterFactions; track faction) {
          <tr class="character-item">
            <td>{{ faction.id }}</td>
            <td>{{ faction.name }}</td>
            <td>{{ faction.description }}</td>
          </tr>
          }
        </tbody>
      </table>
      } @else {
      <div class='character-factions'>
        <p>No character factions found.</p>
      </div>
      }
    </div>
  `,
  styles: `
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
  `,
})
export class CharacterFactionComponent {
  characterFactions: any = null;
  noCharacterFactions: string = '';

  constructor(private http: HttpClient) {
    this.http.get(`http://localhost:3000/api/character-factions`)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.characterFactions = res;
      },
      error: (err) => {
        console.error('Error fetching daily special', err);
        if (err.error === 'Faction not found') {
          this.noCharacterFactions = 'No Character Factions found!';
        } else {
          this.noCharacterFactions =
            'Error fetching Character Factions. Please try again later.';
        }
      },
    });
  }
}
