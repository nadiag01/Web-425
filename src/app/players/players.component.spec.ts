import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes, Router, Route } from '@angular/router';
import { PlayersComponent } from './players.component';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;

  beforeEach(async () => {
    const routes: Routes = [{ path: 'players', component: PlayersComponent }];

    await TestBed.configureTestingModule({
      imports: [PlayersComponent, RouterTestingModule.withRoutes(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have correct route for PlayersComponent', () => {
    const router = TestBed.inject(Router);
    const route: Route | undefined = router.config.find((r) => r.path === 'players');
    expect(route).toBeDefined(); // Check if the route is defined
    expect(route?.component).toBe(PlayersComponent);

    expect(component).toBeTruthy();
  });
//const mydiv  = document.querySelector(".mydiv")
  it('Should correctly display a list of characters', () => {
    const compiled = fixture.nativeElement as HTMLElement; // Get the compiled HTML of the component
    const rowitems = compiled.querySelectorAll('.character-item'); // Get all the menu items
    expect(rowitems.length).toEqual(component.characters.length); // Check if the number of menu items is equal to the number of items in the menu array
  });
});
