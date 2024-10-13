import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { GuildListComponent } from './guild-list.component';
import { Guild } from '../create-guild/create-guild.component';
import { By } from '@angular/platform-browser';

describe('GuildListComponent', () => {
  let component: GuildListComponent;
  let fixture: ComponentFixture<GuildListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuildListComponent, CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuildListComponent);
    component = fixture.componentInstance;
    const mockGuild = [
      {
        guildName: 'guildname',
        notificationPreference: 'notificationpreference',
        description: 'description',
        type: 'social',
        acceptTerms: true
      },
      {
        guildName: 'Nadia',
        notificationPreference: 'Email',
        description: 'description',
        type: 'social',
        acceptTerms: true
      }
    ]
    component.guilds = mockGuild;
    fixture.detectChanges();
  });

  it('should display a message for an empty guild list', () => {
    component.guilds = []
    fixture.detectChanges();
    const noGuilds = fixture.debugElement.query(By.css('.guildp'))
    expect(noGuilds.nativeElement.textContent).toContain('No Guild Created.');
  });

  it('guilds in the newly created component are displaying correctly', () => {
    expect(component.guilds.length).toBeGreaterThan(1);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
