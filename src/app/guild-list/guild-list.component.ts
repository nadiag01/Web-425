import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Guild } from '../create-guild/create-guild.component';

@Component({
  selector: 'app-guild-list',
  standalone: true,
  imports: [CommonModule],
  template: `
   <div>
    <h3>Created Guilds</h3>
    @if(guilds.length > 0){
      <ul>
        @for (guild of guilds; track guild) {
          <li>
          <strong>{{ guild.guildName }}</strong> - {{ guild.type }} - {{ guild.notificationPreference }}
          <p>{{ guild.description }}</p>
          </li>
        }
      </ul>
    }
    @else {
    <p class='guildp'>No Guild Created.</p>
   }
   </div>
  `,
  styles: ``
})
export class GuildListComponent {
@Input() guilds: Guild[]

constructor(){
  this.guilds = []
}
}
