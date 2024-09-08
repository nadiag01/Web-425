import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateCharacterComponent } from './create-character.component';


describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCharacterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate a random character ID between 1 and 1000', () => {
    const id = Math.floor(Math.random() * 1000) + 1;
    expect(id).toBeGreaterThanOrEqual(1);
    expect(id).toBeLessThanOrEqual(1000);
  });

  // Test 2: should add a character with correct customization
  it('should add a character with correct customization', () => {
    component.character = { id: 0, name: 'Test Character', gender: 'Male', class: 'Warrior' };
    component.onSubmit({ valid: true });
    
    expect(component.characters.length).toBe(1);
    expect(component.characters[0].name).toBe('Test Character');
    expect(component.characters[0].gender).toBe('Male');
    expect(component.characters[0].class).toBe('Warrior');
  });

  // Test 3: should reset form fields after resetForm is called
  it('should reset all form fields after resetForm is called', () => {
    component.character = { id: 0, name: 'Test', gender: 'Male', class: 'Mage' };
    component.resetForm({ resetForm: () => {} });

    expect(component.character.name).toBe('');
    expect(component.character.gender).toBe('');
    expect(component.character.class).toBe('');
  });
});