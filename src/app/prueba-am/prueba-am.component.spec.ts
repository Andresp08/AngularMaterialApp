import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaAMComponent } from './prueba-am.component';

describe('PruebaAMComponent', () => {
  let component: PruebaAMComponent;
  let fixture: ComponentFixture<PruebaAMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaAMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaAMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
