import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpPageComponent } from './up-page.component';

describe('UpPageComponent', () => {
  let component: UpPageComponent;
  let fixture: ComponentFixture<UpPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
