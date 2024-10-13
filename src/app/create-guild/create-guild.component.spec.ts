import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { CreateGuildComponent } from './create-guild.component';

describe('CreateGuildComponent', () => {
  let component: CreateGuildComponent;
  let fixture: ComponentFixture<CreateGuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGuildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call submit on form submit with vaild data ', () => {
    expect(component.guildForm.valid).toBeFalsy();
  });

  it('form should be invalid when empty', () => {
    component.guildForm.controls['guildName'].setValue('guildName');
    component.guildForm.controls['description'].setValue('description');
    component.guildForm.controls["type"].setValue('type');
    component.guildForm.controls["acceptTerms"].setValue(true);
    component.guildForm.controls["notificationPreference"].setValue('notificationPreference');
    expect(component.guildForm.valid).toBeTruthy()
  });

  it('form should be valid when filled correctly', () => {
    spyOn(component,'submit')
    component.guildForm.controls['guildName'].setValue('guildName');
    component.guildForm.controls['description'].setValue('description');
    component.guildForm.controls["type"].setValue('type');
    component.guildForm.controls["acceptTerms"].setValue(true);
    component.guildForm.controls["notificationPreference"].setValue('notificationPreference');
    fixture.detectChanges();
    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);
    expect(component.submit).toHaveBeenCalled();
  });


});
