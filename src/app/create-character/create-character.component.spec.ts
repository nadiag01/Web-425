import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharacterComponent } from './create-character.component';

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCharacterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate a random character ID between 1 and 1000 with no decimal places', () => {
    component.class = 'Mage';
    component.gender = 'Female';
    component.name = 'Nadia';
    component.createCharacter();
    expect(component.characterId).toBeGreaterThan(0);
    expect(component.characterId).toBeLessThanOrEqual(1000);
    expect(Number.isInteger(component.characterId)).toBe(true);
  });

  it('should add a character with correct customization', () => {
    component.class = 'Mage';
    component.gender = 'Female';
    component.name = 'Nadia';
    component.createCharacter();

    expect(component.newCharacter.character.class).toEqual('Mage')
    expect(component.newCharacter.character.gender).toEqual('Female')
    expect(component.newCharacter.character.name).toEqual('Nadia')
  });

  it('should reset all form fields to their default values after resetForm is called', () => {
    expect(component).toBeTruthy();
    component.class = 'Mage';
    component.gender = 'Female';
    component.name = 'Nadia';
    component.resetForm();

    expect(component.name).toBe('')
    expect(component.gender).toBe('')
    expect(component.class).toBe('')
 });
});
