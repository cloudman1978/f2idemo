import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RueilComponent } from './rueil.component';

describe('RueilComponent', () => {
  let component: RueilComponent;
  let fixture: ComponentFixture<RueilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RueilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
