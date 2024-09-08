import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `
    <nav>
      <a routerLink="/players">Players</a>
      <a routerLink="/signin">Sign In</a>
      <a routerLink="/create-character">Create Character</a>
      <a routerLink="/create-guild">Create Guild</a>
      <a routerLink="/character-faction">Character Faction</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    nav a {
      margin: 10px;
      text-decoration: none;
      color: blue;
    }
    nav a:hover {
      text-decoration: underline;
    }
  `]
})



export class AppComponent {
  title = 'rpg-character-builder';

}








