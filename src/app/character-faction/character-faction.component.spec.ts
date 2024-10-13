import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CharacterFactionComponent } from './character-faction.component';
import { By } from '@angular/platform-browser';

describe('CharacterFactionComponent', () => {
  let component: CharacterFactionComponent;
  let fixture: ComponentFixture<CharacterFactionComponent>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterFactionComponent, HttpClientTestingModule],
    }).compileComponents();

    httpTestingController = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(CharacterFactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(' should handle errors when data is not found', () => {
    const expectedMessage = 'No Character Factions found!';
    const req = httpTestingController.expectOne(
      `http://localhost:3000/api/character-factions`
    );
    req.flush('Faction not found', { status: 404, statusText: 'Not Found' });
    expect(component.noCharacterFactions).toEqual(expectedMessage);
  });

  it('should correctly fetch a list of character factions', () => {
    const mockData = [
      {
        name: 'The Iron Brotherhood',
        description:
          'The Iron Brotherhood is a faction of brave and honorable warriors. They value strength, courage, and loyalty above all else. Their members are known for their iron will and unbreakable spirit.',
      },
      {
        name: 'The Arcane Order',
        description:
          'The Arcane Order is a faction of powerful mages. They seek knowledge and wisdom, and their magic is a tool to understand the mysteries of the universe. They are respected and feared for their magical prowess.',
      },
    ];
    const req = httpTestingController.expectOne(
      `http://localhost:3000/api/character-factions`
    );
    req.flush(mockData);
    expect(component.characterFactions).toEqual(mockData);
  });

  it('should update the characterFactions div when character factions are found', () => {
    const mockData = [
      {
        name: 'The Iron Brotherhood',
        description:
          'The Iron Brotherhood is a faction of brave and honorable warriors. They value strength, courage, and loyalty above all else. Their members are known for their iron will and unbreakable spirit.',
      },
      {
        name: 'The Arcane Order',
        description:
          'The Arcane Order is a faction of powerful mages. They seek knowledge and wisdom, and their magic is a tool to understand the mysteries of the universe. They are respected and feared for their magical prowess.',
      },
    ];
    const req = httpTestingController.expectOne(
      `http://localhost:3000/api/character-factions`
    );
    req.flush(mockData);
    expect(component.characterFactions).toEqual(mockData)
  });
});
