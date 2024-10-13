import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './character-list.component';
import { By } from '@angular/platform-browser';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterListComponent, CommonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
    const mockCharacter = {
      character: {
        name: 'name',
        gender: 'gender',
        class: 'class',
      },
      characterId: 2
    };
    component.newCharacter = mockCharacter
    fixture.detectChanges();
  });

  it('characters in the newly created component are displaying correctly', () => {
    expect(component.newCharacter.character.gender).toEqual('gender');
  });

  it('should display a message for an empty character list', () => {
    const mockCharacter = {
      character: {
        name: "",
        gender: "",
        class: ""
      },
      characterId: 0
    }
    component.newCharacter = mockCharacter;
    fixture.detectChanges();
    const noCharacters = fixture.debugElement.query(By.css('.no-char'));
    expect(noCharacters.nativeElement.textContent).toContain('No new Character');
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
