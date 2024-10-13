
import { Component,EventEmitter,Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms'
import { GuildListComponent } from '../guild-list/guild-list.component';

export interface Guild {
  guildName: string | null;
  notificationPreference: string | null;
  description: string | null;
  type: string | null;
  acceptTerms: boolean;
}

@Component({
  selector: 'app-create-guild',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, GuildListComponent],
  template: `
    <div class="create-guild">
   <h2>Create a Guild</h2>
   <form [formGroup]="guildForm" (ngSubmit)="submit(); guildForm.reset()">
   <!-- Guild Name -->
   <label for="guildName">Guild Name:</label>
   <input type="text" id="guildName" name="guildName" formControlName="guildName">
   <!-- Description -->
   <label for="description">Description:</label>
   <textarea id="description" name="description" formControlName="description"></textarea>
   <!-- Type -->
   <label for="type">Type:</label>
   <select id="type" name="type" formControlName="type">
      <option value="" disabled>Select Type</option>
      <option value="Competitive">Competitive</option>
      <option value="Casual">Casual</option>
      <option value="Social">Social</option>
      <option value="Educational">Educational</option>
   </select>
   <!-- Notification Preference -->
   <label>Notification Preference:</label>
   <label>
   <input type="radio" name="notificationPreference" formControlName="notificationPreference" value="Email" > Email
   </label>
   <label>
   <input type="radio" name="notificationPreference" formControlName="notificationPreference" value="SMS" > SMS
   </label>
   <label>
   <input type="radio" name="notificationPreference" formControlName="notificationPreference" value="In-App" > In-App
   </label>
   <!-- Accept Terms -->
   <label>
   <input type="checkbox" name="acceptTerms" formControlName="acceptTerms" > I accept the terms and conditions.
   </label>
   <!-- Submit Button -->
   <button type="submit" [disabled]="!guildForm.valid">Create Guild</button>
   </form>
</div>
<!-- Display Created Guilds -->
  <app-guild-list [guilds]="guildData"></app-guild-list>
  `,
  styles: `.create-guild {
    max-width: 600px;
    margin: 0 auto;
  }

  .create-guild form {
    display: flex;
    flex-direction: column;
  }

  .create-guild label {
    margin: 5px 0;
  }

  .create-guild input, .create-guild select, .create-guild textarea {
    margin-bottom: 10px;
    padding: 8px;
  }

  .guild-bottom {
    padding-bottom: 100px;
  }

  button {
    margin-top: 15px;
  }

  h3 {
    margin-top: 30px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 15px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  `
})
export class CreateGuildComponent {
  @Output() newguild = new EventEmitter()

  constructor(private fb: FormBuilder) {
    this.guildData = []
  }

  guildData: Guild[]

  guildForm: FormGroup = this.fb.group({
    guildName: [null, Validators.compose([Validators.required])],
    description: [null, Validators.compose([Validators.required])],
    type: [null, Validators.compose([Validators.required])],
    acceptTerms: [false, Validators.compose([Validators.required])],
    notificationPreference: [null, Validators.compose([Validators.required])]
  })

  submit() {
    console.log("submit data", this.guildForm.value)
    this.guildData.push(this.guildForm.value)
    this.newguild.emit(this.guildData)
  }
}
