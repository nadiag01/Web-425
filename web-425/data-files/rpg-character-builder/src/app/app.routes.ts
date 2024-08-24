import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Import HomeComponent
import { PlayersComponent } from './players/players.component';
import { SigninComponent } from './signin/signin.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { CreateGuildComponent } from './create-guild/create-guild.component';
import { CharacterFactionComponent } from './character-faction/character-faction.component';


export const appRoutes: Routes = [
  { path: 'players', component: PlayersComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'create-character', component: CreateCharacterComponent },
  { path: 'create-guild', component: CreateGuildComponent },
  { path: 'character-faction', component: CharacterFactionComponent },
  { path: '', redirectTo: '/signin', pathMatch: 'full' },
];



export const routes: Routes = [
    { path: '', component: HomeComponent }, // Default route
    { path: 'home', component: HomeComponent }, // Home route
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }


