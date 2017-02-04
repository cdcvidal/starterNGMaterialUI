/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PoisComponent } from './pois.component';

describe('PoisComponent', () => {
  let component: PoisComponent;
  let fixture: ComponentFixture<PoisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
